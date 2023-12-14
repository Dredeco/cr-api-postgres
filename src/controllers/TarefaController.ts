import { randomUUID } from 'crypto';
import { Request, Response } from "express";
import { TarefaServices } from "../services/TarefaService";
import { AppDataSource } from "../database";
import { Tarefa } from "../entities/Tarefa";

export class TarefaController {
    tarefaServices: TarefaServices

    constructor(
        tarefaServices = new TarefaServices(AppDataSource.manager)
    ){
        this.tarefaServices = tarefaServices;
    }

    createTask = async (req: Request, res: Response) => {
        const task: Tarefa = req.body;
        const findTask = await this.tarefaServices.getTaskByNumber(task.tarefa)
        
        if(findTask) {
            return res.status(400).json({message: 'Bad Request - O chamado já existe'})
        }
        
        task.id = randomUUID()

        await this.tarefaServices.createTask(task)
        return res.status(201).json({message: `Registro criado: ${task.tarefa}`})
    }

    getAllTasks = async (req: Request, res: Response) => {
        const tasks = await this.tarefaServices.getAllTasks()
        return res.status(200).json({tasks})
    }

    getAllTasksNumbers = async (req: Request, res: Response) => {
        const tasks = await this.tarefaServices.getAllTaskNumbers()
        return res.status(200).json({tasks})
    }

    getTasksByRegisterNumber = async (req: Request, res: Response) => {
        const numero_chamado = req.body.numero_chamado
        const tasks = await this.tarefaServices.getTasksByRegisterNumber(numero_chamado)
        return res.status(200).json({tasks})
    }

    updateTask = async (req: Request, res: Response) => {
        const taskNumber = req.params.numero
        const tasks = req.body
        await this.tarefaServices.updateTask(taskNumber, tasks)
        return res.status(202).json({message: "Tarefa atualizada:" + taskNumber})
    }

    
}