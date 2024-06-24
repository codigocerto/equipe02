import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secretKey', // Substitua pela sua chave secreta real
        });
    }

    async validate(payload: any): Promise<User> {
        const { username } = payload; // Extrai o username do payload do JWT
        const user = await this.userService.findByUsername(username);

        if (!user) {
            throw new UnauthorizedException('Unauthorized'); // Lança exceção se usuário não for encontrado
        }

        return user; // Retorna o usuário se validação for bem-sucedida
    }
}
