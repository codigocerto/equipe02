import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  username?: string;
  password?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}
