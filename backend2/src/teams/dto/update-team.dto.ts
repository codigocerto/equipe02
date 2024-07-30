import { PartialType } from '@nestjs/swagger';
import { CreateTeamDto } from './create-team.dto';
import { TeamStack } from '../enum/team-stack.enum';
import { User } from 'src/users/entities/user.entity';
import { UUID } from 'crypto';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
  readonly team_stack?: TeamStack;
  readonly lead?: User;
  // readonly lead?: string;
  readonly membersId?: UUID[];
  members?: User[];
}
