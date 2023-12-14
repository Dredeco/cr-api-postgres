import { DataSource } from "typeorm"
import { Chamado } from "../entities/Chamado"
import { Tarefa } from "../entities/Tarefa"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    migrations: [
        "./src/database/migrations/*.ts"
    ],
    entities: [
        Chamado,
        Tarefa
    ]
})

AppDataSource.initialize()
    .then(() => {
        console.log("DataSource up")
    })
    .catch((err) => {
        console.error(err)
    })