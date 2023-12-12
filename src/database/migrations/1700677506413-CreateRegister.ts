import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRegister1700677506413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "chamados",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "numero_chamado",
                        type: "varchar",
                        isUnique: false
                    },
                    {
                        name: "task",
                        type: "varchar",
                    },
                    {
                        name: "sctask",
                        type: "varchar",
                    },
                    {
                        name: "analista_task",
                        type: "varchar",
                    },
                    {
                        name: "equipe",
                        type: "varchar",
                    },
                    {
                        name: "classificacao",
                        type: "varchar",
                    },
                    {
                        name: "sistema",
                        type: "varchar",
                    },
                    {
                        name: "motivo",
                        type: "varchar",
                    },
                    {
                        name: "justificativa",
                        type: "varchar",
                    },
                    {
                        name: "analise_supervisor",
                        type: "varchar",
                    },
                    {
                        name: "analise_sniper",
                        type: "varchar",
                    },
                    {
                        name: "analise_conclusao",
                        type: "varchar",
                    },
                    {
                        name: "nome_artigo",
                        type: "varchar",
                    },
                    {
                        name: "solicitacao_artigo",
                        type: "varchar",
                    },
                    {
                        name: "validacao_artigo",
                        type: "varchar",
                    },
                    {
                        name: "justificativa_artigo",
                        type: "varchar",
                    },
                    {
                        name: 'criadoEm',
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("registers")
    }

}
