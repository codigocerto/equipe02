import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { UserSkills } from '../enums/user-skills.enum';
import { UserRoles } from '../enums/user-role.enum';

export class UpdateUserDto {
  username?: string;
  password?: string;
  role?: UserRoles;
  // skills?: UserSkills[] | UserSkills;
  github?: string;
  linkedin?: string;
  website?: string;
}
