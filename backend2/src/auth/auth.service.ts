import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthPayloadDto } from './dto/auth.dto';
@Injectable()
export class AuthService {
  constructor(  private readonly usersService: UsersService,private jwtService: JwtService) {}

  async generateJwtToken(authPayload:AuthPayloadDto): Promise<string> {
    const payload = { email: authPayload.email, password: authPayload.password };
    return this.jwtService.sign(payload);
  }
}


