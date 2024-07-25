import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './entities/user/user.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import validator from 'validator';
@Injectable()
export class UsersService {
  logger = new Logger(UsersService.name);
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const checkEmailUser = await this.findByEmail(createUserDto.email);

      const checkLinkedinUser = await this.userRepository.findOne({
        where: { linkedin: createUserDto.linkedin },
      });

      const checkGitHubUser = await this.userRepository.findOne({
        where: { github: createUserDto.github },
      });

      if (checkEmailUser) throw new ConflictException('Usuário já cadastrado!');

      if (checkLinkedinUser)
        throw new ConflictException('Linkedin já cadastrado!');

      if (checkGitHubUser) throw new ConflictException('GitHub já cadastrado!');

      return this.userRepository.save(createUserDto);
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

  async update(id: UUID, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      await this.getUserById(id);

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
