import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1700679232133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isUnique: true
                    },
                    {
                        name: "key",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "team",
                        type: "varchar",
                    },
                    {
                        name: "role",
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
        await queryRunner.dropTable('users')
    }
}
