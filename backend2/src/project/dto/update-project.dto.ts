import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { ProjectStatus } from '../enums/project-status.enum';
import { User } from 'src/users/entities/user.entity';
import { Team } from 'src/teams/entities/team.entity';
import { UUID } from 'crypto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  readonly title?: string;
  readonly description?: string;
  urlPhoto?: string;
  // readonly status?: ProjectStatus;
  readonly status?: ProjectStatus;
  readonly lead?: User;
  readonly teamsId?: UUID[];
  teams?: Team[];
  readonly finished_at?: Date;
}
