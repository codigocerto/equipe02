import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    register(@Body('username') username: string, @Body('password') password: string) {
        return this.userService.register(username, password);
    }
}