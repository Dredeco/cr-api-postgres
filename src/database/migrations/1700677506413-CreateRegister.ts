import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRegister1700677506413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "registers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "number",
                        type: "varchar",
                        isUnique: true
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
                        name: "date",
                        type: "timestamp",
                    },
                    {
                        name: "user",
                        type: "varchar",
                    },
                    {
                        name: "team",
                        type: "varchar",
                    },
                    {
                        name: "supervisor",
                        type: "varchar",
                    },
                    {
                        name: "classification",
                        type: "varchar",
                    },
                    {
                        name: "system",
                        type: "varchar",
                    },
                    {
                        name: "fixProc",
                        type: "varchar",
                    },
                    {
                        name: "observations",
                        type: "varchar",
                    },
                    {
                        name: "supervisorObservations",
                        type: "varchar",
                    },
                    {
                        name: 'createdAt',
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
