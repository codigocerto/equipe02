import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
export class ProtectedController {
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getProtectedResource() {
        return { message: 'This is a protected resource' };
    }
}
