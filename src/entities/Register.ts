import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, PrimaryColumnCannotBeNullableError } from "typeorm";

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
    classification: string;

    @Column()
    system: string;

    @Column()
    fixProc: string;
    
    @Column()
    motive: string;

    @Column()
    observations: string;

    @Column()
    supervisorObservations: string;

    @Column()
    sniperObservations: string;

    @Column()
    finalObservations: string;

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
        motive: string,
        observations: string,
        supervisorObservations: string,
        sniperObservations: string,
        finalObservations: string,
        createdAt: Date
    ){
        this.id = id,
        this.number = number,
        this.task = task,
        this.sctask = sctask,
        this.date = date,
        this.user = user,
        this.team = team,
        this.supervisor = supervisor,
        this.classification = classification,
        this.system = system,
        this.fixProc = fixProc,
        this.motive = motive,
        this.observations = observations,
        this.supervisorObservations = supervisorObservations,
        this.sniperObservations = sniperObservations,
        this.finalObservations = finalObservations,
        this.createdAt = createdAt
    }
}