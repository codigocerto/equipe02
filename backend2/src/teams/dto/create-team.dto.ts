import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { TeamStack } from '../enum/team-stack.enum';
import { UUID } from 'crypto';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsArray()
  @IsUUID()
  membersId: UUID[];

  @IsNotEmpty()
  leadId: UUID;

  lead: User;
  members: User[];

  @IsNotEmpty()
  @IsString()
  readonly team_stack: TeamStack;
}
