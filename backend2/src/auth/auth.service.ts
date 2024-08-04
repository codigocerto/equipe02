import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/auth.dto';



@Injectable()
export class AuthService {

  constructor( private jwtService: JwtService) {}

  // Gera um token JWT e retorna um objeto JSON contendo o token
  async generateJwtToken(authPayload: AuthPayloadDto): Promise<{ token: string }> {
    
    const payload = { email: authPayload.email, password: authPayload.password };
    
    // Gera o token usando o JwtService
    const token = this.jwtService.sign(payload);

    // Em vez de retornar apenas o token, retornamos um objeto JSON
    return { token };
    
   return 
  }
}


