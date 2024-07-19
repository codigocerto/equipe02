import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { ProjectStatus } from '../enums/project-status.enum';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  readonly title?: string;
  readonly description?: string;
  readonly status?: ProjectStatus;
  readonly lead?: string;
  readonly teams?: string;
  readonly finished_at?: Date;
}
