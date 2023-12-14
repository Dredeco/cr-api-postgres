import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Chamado1702576467578 implements MigrationInterface {

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
                        name: "tarefas",
                        type: "varchar",
                        isArray: true
                    },
                    {
                        name: "analista_chamado",
                        type: "varchar",
                    },
                    {
                        name: "equipe_chamado",
                        type: "varchar",
                    },
                    {
                        name: "data_chamado",
                        type: "timestamp",
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
                        name: "justificativa_chamado",
                        type: "varchar",
                    },
                    {
                        name: "analise_supervisor",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "analise_sniper",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "analise_conclusao",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "nome_artigo",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "solicitacao_artigo",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "validacao_artigo",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "justificativa_artigo",
                        type: "varchar",
                        isNullable: true
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
        await queryRunner.dropTable("chamados")
    }

}
