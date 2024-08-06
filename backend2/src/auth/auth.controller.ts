import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';

@Controller() 
export class AuthController {
  
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() { email, password }: AuthPayloadDto) {

    try {

        const result = await this.authService.validateUser(email,password);

        return result; // objeto contendo o token e informações do usuário

    } catch (error) {

       throw new HttpException(error.message, HttpStatus.UNAUTHORIZED); //  erros
    }
  }
}
