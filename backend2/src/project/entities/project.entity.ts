import { Exclude } from 'class-transformer';
import { UUID } from 'crypto';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectStatus } from '../enums/project-status.enum';
import { User } from 'src/users/entities/user.entity';
import { Team } from 'src/teams/entities/team.entity';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id?: UUID;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: ProjectStatus,
  })
  status: ProjectStatus;

  @Column('text', { nullable: true })
  urlPhoto?: string;

  @Column('date')
  created_at: Date;

  @Column('date')
  finished_at: Date;

  @ManyToOne(() => User, (user) => user.projects, { eager: false })
  @JoinTable()
  lead: User;

  @ManyToMany(() => Team, (team) => team.id, { eager: false })
  @JoinTable()
  teams: Team[]; //Teams[]
}
