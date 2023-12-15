import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Tarefa } from "./Tarefa";

@Entity("chamados")
export class Chamado {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    numero_chamado: string;
    
    @Column("int", {array: true})
    tarefas: Tarefa[]

    @Column()
    analista_chamado: string;

    @Column()
    equipe_chamado: string;

    @Column()
    data_chamado: Date;

    @Column()
    n1_resolveria: string;

    @Column()
    analise_supervisor: string;

    @Column()
    analise_sniper: string;

    @Column()
    repasse_indevido: string

    @Column()
    analise_conclusao: string;

    @Column()
    nome_artigo: string;

    @Column()
    solicitacao_artigo: string;

    @Column()
    validacao_artigo: string;

    @Column()
    justificativa_artigo: string;

    @Column()
    criadoEm: Date;

    constructor(
        id: string,
        numero_chamado: string,
        tarefas: Tarefa[],
        analista_chamado: string,
        equipe_chamado: string,
        data_chamado: Date,
        n1_resolveria: string,
        analise_supervisor: string,
        analise_sniper: string,
        repasse_indevido: string,
        analise_conclusao: string,
        criadoEm: Date,
        nome_artigo: string,
        solicitacao_artigo: string,
        validacao_artigo: string,
        justificativa_artigo: string
    ){
        this.id = id,
        this.numero_chamado = numero_chamado,
        this.tarefas = tarefas,
        this.analista_chamado = analista_chamado,
        this.equipe_chamado = equipe_chamado,
        this.data_chamado = data_chamado,
        this.n1_resolveria = n1_resolveria,
        this.analise_supervisor = analise_supervisor,
        this.analise_sniper = analise_sniper,
        this.repasse_indevido = repasse_indevido,
        this.analise_conclusao = analise_conclusao,
        this.nome_artigo = nome_artigo,
        this.solicitacao_artigo = solicitacao_artigo,
        this.validacao_artigo = validacao_artigo,
        this.justificativa_artigo = justificativa_artigo,
        this.criadoEm = criadoEm
    }
}