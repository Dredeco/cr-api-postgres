import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Tarefa1702576430595 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(({
                name: "tarefas",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "numero_chamado",
                        type: "varchar",
                    },
                    {
                        name: "tarefa",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "analista_task",
                        type: "varchar",
                    },
                    {
                        name: "equipe_task",
                        type: "varchar",
                    },
                    {
                        name: "data_task",
                        type: "timestamp",
                    },
                    {
                        name: "mesa_task",
                        type: "varchar",
                    },
                    {
                        name: "justificativa_task",
                        type: "varchar",
                    },
                    {
                        name: 'criadoEm',
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            }))
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tarefas")
    }

}
