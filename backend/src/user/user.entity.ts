import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    volunteer_id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;
}
