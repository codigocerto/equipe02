import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const checkUser = await this.findByEmail(createUserDto.email);

    if (checkUser) throw new ConflictException('Usuário já cadastrado!');

    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[] | null> {
    return this.userRepository.find();
  }

  async findUser(userId: UUID): Promise<User | null> {
    const checkUser = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!checkUser)
      throw new NotFoundException('Usuário não existe no banco de dados');

    return checkUser;
  }

  async update(id: UUID, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new NotFoundException(`Usuário com o id: ${id} não foi encontrado`);

    user.email = updateUserDto.email || user.email;
    user.password = updateUserDto.password || user.password;

    return this.userRepository.save(user);
  }

  async remove(id: UUID): Promise<string> {
    const user = await this.userRepository.findBy({ id });
    if (!user)
      throw new NotFoundException(`Usuário com o id ${id} não encontrado`);

    this.userRepository.remove(user);
    return 'Usuário Removido';
  }

  findByEmail(userEmail: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email: userEmail,
      },
    });
  }
}
