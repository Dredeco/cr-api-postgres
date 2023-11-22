import { Entity, PrimaryColumn, Column } from "typeorm";
import {randomUUID} from 'crypto'

@Entity("users")
export class Users {
    @PrimaryColumn()
    id: string;

    @Column()
    key: string;

    @Column()
    name: string;

    @Column()
    team: string;

    @Column()
    role: string;

    @Column()
    createdAt: Date;

    constructor(
        id: string,
        key: string,
        name: string,
        team: string,
        role: string,
        createdAt: Date
    ){
        this.id = randomUUID(),
        this.key = key,
        this.name = name,
        this.team = team,
        this.role = role,
        this.createdAt = createdAt
    }
}