import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/domain/entities/user/user.entity';
import { UsersService } from 'src/domain/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async validate(payload: any): Promise<User> {
    return this.userService.findByEmail(payload.email);
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      message: 'Login concluído!',
      email: payload.email,
      token: this.jwtService.sign(payload),
    };
  }
}
