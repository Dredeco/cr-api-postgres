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
                        name: "numero",
                        type: "varchar",
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
                        name: "data",
                        type: "timestamp",
                    },
                    {
                        name: "status",
                        type: "varchar",
                    },
                    {
                        name: "mesaTarefa",
                        type: "varchar",
                    },
                    {
                        name: "mesaChamado",
                        type: "varchar",
                    },
                    {
                        name: "analista",
                        type: "varchar",
                    },
                    {
                        name: "equipe",
                        type: "varchar",
                    },
                    {
                        name: "supervisor",
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
                        name: "corrigirArtigo",
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
                        name: "analiseSupervisor",
                        type: "varchar",
                    },
                    {
                        name: "analiseSniper",
                        type: "varchar",
                    },
                    {
                        name: "analiseConclusao",
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
        await queryRunner.dropTable("chamados")
    }

}
