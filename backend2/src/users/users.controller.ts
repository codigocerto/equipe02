import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
 

} from '@nestjs/common';
import { UsersService } from './users.service';

import { ApiTags } from '@nestjs/swagger';
import { UUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRolesValidation } from './pipes/user-roles-validation.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';



@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: UUID) {
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: UUID,
    @Body(UserRolesValidation) updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.usersService.remove(id);
  }
}
