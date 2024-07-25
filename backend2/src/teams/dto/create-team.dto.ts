import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { TeamStack } from '../enum/team-stack.enum';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsArray()
  readonly members: User[];

  @IsNotEmpty()
  readonly lead: User;

  @IsNotEmpty()
  @IsString()
  readonly teamStack: TeamStack;
}
