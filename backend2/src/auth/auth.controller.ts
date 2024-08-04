//auth.controller.ts
import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() authPayload:AuthPayloadDto) {
    
    try {
      
    const user = this.authService.generateJwtToken(authPayload)
  
    if(!user) throw new HttpException('Invalid Credentials', 401)
      console.log(user)
      return user;
    } catch (error) {
      console.log(error)
    }
  }
}


