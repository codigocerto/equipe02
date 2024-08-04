import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private userService: UsersService) {}

  async validateUser(email: string, password: string): Promise<{ token: string, user?: User } | null> {

    const user = await this.userService.findByEmail(email);

    if (!user) {
      
      throw new UnauthorizedException('Usuário não encontrado');
    }

    // Use verificar a senha
    
    if( password !== user.password){

      throw new UnauthorizedException('Senha inválida');
    }

    // Se o usuário for válido, gera o token
    return this.generateJwtToken(user.email,user); // Passa também o usuário
  }

  private generateJwtToken(email: string, user: User): { token: string } {

    const payload = { email: email, sub: user.id }; // Apenas o necessário

    const token = this.jwtService.sign(payload);

    return { token }; // Retorna o token
  }
}

