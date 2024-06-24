import { Controller, Get, Post, Body, Request, UseGuards, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body('username') username: string, @Body('password') password: string) {
        const token = await this.authService.login(username, password);
        if (!token) {
            throw new UnauthorizedException('Credenciais inválidas');
        }
        return { access_token: token };
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return this.authService.validateUser(req.user, req.password);
    }
}
