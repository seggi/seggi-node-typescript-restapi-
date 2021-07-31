import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column('varchar')
    lastname: string;

    @Column()
    username: string;

    @Column('varchar',{ unique: true})
    email: string;

    @Column('varchar')
    password: string;

    @Column('date')
    age: string 

    @Column('varchar')
    sex: string
}