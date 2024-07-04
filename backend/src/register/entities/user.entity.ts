import { Exclude } from 'class-transformer';
import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: UUID;

  @Column('text', { unique: true })
  email: string;

  @Column('text')
  @Exclude()
  password: string;
}
