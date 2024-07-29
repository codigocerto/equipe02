import { Exclude } from 'class-transformer';
import { UUID } from 'crypto';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRoles } from '../enums/user-role.enum';
import { Project } from 'src/project/entities/project.entity';
import { Team } from 'src/teams/entities/team.entity';

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

  // @OneToMany(() => Project, (project) => project.lead)
  // projects?: Project[];

  // @ManyToMany(() => Team, (team) => team.id, { eager: true })
  // teams?: Team[];
  @OneToMany(() => Project, (project) => project.lead)
  projects?: Project[];

  @ManyToMany(() => Team, (team) => team.members, { eager: true })
  teams?: Team[];
}
