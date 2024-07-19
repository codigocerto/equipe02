import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { ProjectStatus } from '../enums/project-status.enum';

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
  readonly lead: string; //User

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
