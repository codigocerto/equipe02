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
import { Team } from 'src/teams/entities/team.entity';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  urlPhoto: string;

  @IsNotEmpty()
  @IsString()
  readonly status: ProjectStatus;

  @IsNotEmpty()
  @IsUUID()
  leadId: UUID; //User

  // @IsNotEmpty()
  lead: User;

  @IsArray()
  // @IsUUID()
  teamsId: UUID[]; //Teams[]

  teams: Team[];

  @IsNotEmpty()
  @IsDateString()
  readonly finishedAt: Date;

  @IsDateString()
  @IsNotEmpty()
  readonly createdAt: Date;
}
