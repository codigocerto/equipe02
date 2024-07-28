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
import { User } from 'src/users/entities/user.entity';
import { TeamStack } from '../enum/team-stack.enum';
import { Project } from 'src/project/entities/project.entity';

@Entity('team')
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id?: UUID;

  @Column({
    type: 'enum',
    enum: TeamStack,
  })
  team_stack: TeamStack;

  // @ManyToOne(() => User, (user) => user.id, { eager: false })
  // lead: User;

  // @ManyToMany(() => User, (user) => user.teams, { eager: false })
  // members: User[];
  @ManyToOne(() => User, (user) => user.teams, { eager: false })
  lead: User;

  @ManyToMany(() => User, (user) => user.teams, { eager: false })
  @JoinTable()
  members: User[];

  @ManyToMany(() => Project, (project) => project.teams, { eager: false })
  @JoinTable()
  projects: Project[];
}
