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
import { User } from 'src/users/entities/user.entity';
import { TeamStack } from '../enum/team-stack.enum';

@Entity('team')
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id?: UUID;

  @Column({
    type: 'enum',
    enum: TeamStack,
  })
  team_stack: TeamStack;

  @ManyToOne((_type) => User, (user) => user.projects, { eager: false })
  lead: User;

  @ManyToOne((_type) => User, (user) => user.projects, { eager: false })
  members: User;

  @Column('date')
  created_at: Date;

  // @Column('text')

  @Column('date')
  finished_at: Date;
}
