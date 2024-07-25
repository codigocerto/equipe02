import { Exclude } from 'class-transformer';
import { UUID } from 'crypto';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRoles } from '../enums/user-role.enum';
import { Project } from 'src/project/entities/project.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: UUID;

  @Column('text')
  username: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
  })
  role: UserRoles;

  @Column('text', { unique: true })
  email: string;

  @Column('text')
  @Exclude()
  password: string;

  @Column('text', { unique: true })
  github?: string;

  @Column('text', { unique: true })
  linkedin?: string;

  @Column('text') // { unique: true })
  website?: string;

  @OneToMany((_type) => Project, (project) => project.lead, { eager: true })
  projects: Project[];
}
