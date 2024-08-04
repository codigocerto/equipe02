//local.auth.ts
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.userService.validateUser(email,password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
