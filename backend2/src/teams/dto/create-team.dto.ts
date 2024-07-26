import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { TeamStack } from '../enum/team-stack.enum';
import { UUID } from 'crypto';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsArray()
  readonly memberIds: UUID[];

  @IsNotEmpty()
  leadId: UUID;

  lead: User;

  @IsNotEmpty()
  @IsString()
  readonly team_stack: TeamStack;
}
