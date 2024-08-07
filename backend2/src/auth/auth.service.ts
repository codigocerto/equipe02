import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  async validateUser(email: string, password: string): Promise<{ token: string, user?: User } | null> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Senha Incorreta!');
    }

    // Se o usuário for válido, gera o token
    return this.generateJwtToken(user.email, user); // Passa também o usuário
  }

  public generateJwtToken(email: string, user: User): { token: string, user: User } {
    const payload = { email: email,secret: process.env.JWT_SECRET}; // Apenas o necessário
    
    const token =  this.jwtService.sign(payload);
    return { token, user }; // Retorna o token
  }
}
