import "reflect-metadata"
import express, { Request, Response } from "express" 
import "./database"
import { router } from "./routes";

const app = express();

app.use(express.json())
app.use(router)

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({message: "Controle de Repasses API"})
})

app.listen(5000, () => console.log("Server is running"));