import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async validateUser(username: string, password: string): Promise<User> {
        const user = await this.findByUsername(username);

        if (!user || user.password !== password) {
            throw new ConflictException('Invalid credentials');
        }

        return user;
    }

    async findByUsername(username: string): Promise<User> {
        return await this.usersRepository.findOne({ where: { username } });
    }

    async register(username: string, password: string): Promise<User> {
        // Verifica se o usuário já existe
        const existingUser = await this.findByUsername(username);
        if (existingUser) {
            throw new ConflictException('Username already exists');
        }

        // Cria um novo usuário
        const newUser = this.usersRepository.create({ username, password });
        return await this.usersRepository.save(newUser);
    }
}