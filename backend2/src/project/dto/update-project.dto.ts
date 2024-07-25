import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { ProjectStatus } from '../enums/project-status.enum';
import { User } from 'src/users/entities/user.entity';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  readonly title?: string;
  readonly description?: string;
  readonly status?: ProjectStatus;
  readonly lead?: User;
  // readonly lead?: string;
  readonly teams?: string;
  readonly finished_at?: Date;
}
