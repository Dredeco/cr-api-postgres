import { DataSource } from "typeorm"
import { Register } from "../entities/Register"

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
        Register,
    ]
})

AppDataSource.initialize()
    .then(() => {
        console.log("DataSource up")
    })
    .catch((err) => {
        console.error(err)
    })