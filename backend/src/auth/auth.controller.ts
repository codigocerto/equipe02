import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { UsersService } from 'src/domain/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.userService.validateUser(email, password);
    return this.authService.login(user);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return this.authService.validate(req.user);
  }
}
