import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, PrimaryColumnCannotBeNullableError } from "typeorm";

@Entity("chamados")
export class Chamado {
    @PrimaryColumn()
    id: string;

    @Column()
    numero_chamado: string;

    @Column()
    task: string;

    @Column()
    sctask: string;

    @Column()
    analista_task: string;

    @Column()
    equipe: string;

    @Column()
    classificacao: string;

    @Column()
    sistema: string;
    
    @Column()
    motivo: string;

    @Column()
    justificativa: string;

    @Column()
    analise_supervisor: string;

    @Column()
    analise_sniper: string;

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
        task: string,
        sctask: string,
        analista_task: string,
        equipe: string,
        classificacao: string,
        sistema: string,
        motivo: string,
        justificativa: string,
        analise_supervisor: string,
        analise_sniper: string,
        analise_conclusao: string,
        criadoEm: Date,
        nome_artigo: string,
        solicitacao_artigo: string,
        validacao_artigo: string,
        justificativa_artigo: string
    ){
        this.id = id,
        this.numero_chamado = numero_chamado,
        this.task = task,
        this.sctask = sctask,
        this.analista_task = analista_task,
        this.equipe = equipe,
        this.classificacao = classificacao,
        this.sistema = sistema,
        this.motivo = motivo,
        this.justificativa = justificativa,
        this.analise_supervisor = analise_supervisor,
        this.analise_sniper = analise_sniper,
        this.analise_conclusao = analise_conclusao,
        this.nome_artigo = nome_artigo,
        this.solicitacao_artigo = solicitacao_artigo,
        this.validacao_artigo = validacao_artigo,
        this.justificativa_artigo = justificativa_artigo,
        this.criadoEm = criadoEm
    }
}