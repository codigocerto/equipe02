import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';
import { ProjectStatus } from '../enums/project-status.enum';
import { User } from 'src/users/entities/user.entity';
import { UUID } from 'crypto';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly status: ProjectStatus;

  @IsNotEmpty()
  @IsUUID()
  leadId: UUID; //User

  // @IsNotEmpty()
  lead: User;

  @IsNotEmpty()
  @IsArray()
  readonly teams: string; //Teams[]

  @IsNotEmpty()
  @IsDateString()
  readonly finished_at: Date;

  @IsDateString()
  @IsNotEmpty()
  readonly created_at: Date;
}
