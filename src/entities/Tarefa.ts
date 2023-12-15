import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("tarefas")
export class Tarefa {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    numero_chamado: string;

    @Column()
    tarefa: string;

    @Column()
    analista_task: string;

    @Column()
    equipe_task: string;

    @Column()
    classificacao_task: string;

    @Column()
    sistema_task: string;

    @Column()
    motivo_task: string;

    @Column()
    justificativa_task: string;

    @Column()
    data_task: string;

    @Column()
    mesa_task: string;

    @Column()
    criadoEm: Date;

    constructor(
        id: string,
        numero_chamado: string,
        tarefa: string,
        analista_task: string,
        equipe_task: string,
        classificacao_task: string,
        sistema_task: string,
        motivo_task: string,
        data_task: string,
        mesa_task: string,
        justificativa_task: string,
        criadoEm: Date,
    ){
        this.id = id,
        this.tarefa = tarefa,
        this.numero_chamado = numero_chamado,
        this.analista_task = analista_task,
        this.equipe_task = equipe_task,
        this.classificacao_task = classificacao_task,
        this.sistema_task = sistema_task,
        this.motivo_task = motivo_task,
        this.data_task = data_task,
        this.mesa_task = mesa_task,
        this.justificativa_task = justificativa_task,
        this.criadoEm = criadoEm
    }
}