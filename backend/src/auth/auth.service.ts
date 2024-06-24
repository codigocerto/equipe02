import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async login(username: string, password: string): Promise<string | null> {
        const user = await this.validateUser(username, password);
        if (user) {
            const payload = { username: user.username, sub: user.volunteer_id };
            return this.jwtService.sign(payload);
        }
        return null;
    }

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findByUsername(username);
        if (user && user.password === password) {
            return user;
        }
        throw new UnauthorizedException('Credenciais inválidas');
    }
}
