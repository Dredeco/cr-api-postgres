import { DataSource } from "typeorm"
import { Chamado } from "../entities/Chamado"

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
    ]
})

AppDataSource.initialize()
    .then(() => {
        console.log("DataSource up")
    })
    .catch((err) => {
        console.error(err)
    })