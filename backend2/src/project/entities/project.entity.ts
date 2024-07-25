import { Exclude } from 'class-transformer';
import { UUID } from 'crypto';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectStatus } from '../enums/project-status.enum';
import { User } from 'src/users/entities/user.entity';

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

  @Column('date')
  created_at: Date;

  // @Column('text')
  @ManyToOne((_type) => User, (user) => user.projects, { eager: false })
  lead: User;

  @Column('text')
  teams: string; //Teams[]

  @Column('date')
  finished_at: Date;
}
