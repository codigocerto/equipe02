import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import validator from 'validator';
import { plainToClass } from 'class-transformer';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class UsersService {
  logger = new Logger(UsersService.name);
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly authService: AuthService
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const checkEmailUser = await this.findByEmail(createUserDto.email);

      if (checkEmailUser) throw new ConflictException('Usuário já cadastrado!');

      const user = this.userRepository.create(createUserDto);

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(user.password, salt);
      user.password = passwordHash;

      const savedUser = await this.userRepository.save(user);
      const { token } = await this.authService.generateJwtToken(savedUser.email, savedUser);
      return plainToClass(User, savedUser);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getAllUsers(): Promise<User[] | null> {
    try {
      const users = await this.userRepository.find();

      if (users.length === 0) {
        throw new NotFoundException(`Não há usuários cadastrados...`);
      }

      return users;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }

  async getUserById(id: UUID) {
    try {
      if (!validator.isUUID(id)) {
        throw new BadRequestException('ID inválido.');
      }

      const user = await this.userRepository.findOne({
        where: { id },
      });

      if (!user) throw new NotFoundException('Usuário não encontrado!');

      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateUser(id: UUID, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const user = await this.getUserById(id);
      // const checkEmailUser = await this.findByEmail(user.email);

      const checkLinkedinUser = await this.userRepository.findOne({
        where: { linkedin: updateUserDto.linkedin },
      });

      const checkGitHubUser = await this.userRepository.findOne({
        where: { github: updateUserDto.github },
      });

      // if (checkEmailUser) throw new ConflictException('Usuário já cadastrado!');

      if (checkLinkedinUser)
        throw new ConflictException('Linkedin já cadastrado!');

      if (checkGitHubUser) throw new ConflictException('GitHub já cadastrado!');

      await this.userRepository.update(id, updateUserDto);

      return await this.getUserById(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: UUID): Promise<string> {
    try {
      if (!validator.isUUID(id)) {
        throw new BadRequestException('ID inválido.');
      }
      const user = await this.getUserById(id);

      this.userRepository.remove(user);
      return 'Usuário Removido';
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findByEmail(userEmail: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email: userEmail,
      },
    });
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.findByEmail(email);

    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
