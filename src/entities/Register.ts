import { Entity, PrimaryColumn, Column } from "typeorm";
import {randomUUID} from 'crypto'

@Entity("registers")
export class Register {
    @PrimaryColumn()
    id: string;

    @Column()
    number: string;

    @Column()
    task: string;

    @Column()
    sctask: string;

    @Column()
    date: Date;

    @Column()
    user: string;

    @Column()
    team: string;

    @Column()
    supervisor: string;

    @Column()
    classificarion: string;

    @Column()
    system: string;

    @Column()
    fixProc: string;

    @Column()
    observations: string;

    @Column()
    supervisorObservations: string;

    @Column()
    createdAt: Date;

    constructor(
        id: string,
        number: string,
        task: string,
        sctask: string,
        date: Date,
        user: string,
        team: string,
        supervisor: string,
        classification: string,
        system: string,
        fixProc: string,
        observations: string,
        supervisorObservations: string,
        createdAt: Date
    ){
        this.id = randomUUID(),
        this.number = number,
        this.task = task,
        this.sctask = sctask,
        this.date = date,
        this.user = user,
        this.team = team,
        this.supervisor = supervisor,
        this.classificarion = classification,
        this.system = system,
        this.fixProc = fixProc,
        this.observations = observations,
        this.supervisorObservations = supervisorObservations
        this.createdAt = createdAt
    }
}