import { EntityManager } from "typeorm";
import { Tarefa } from "../entities/Tarefa";
;
export class TarefaServices {
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ) {
        this.manager = manager;
    }

    createTask = async (task: Tarefa): Promise<Tarefa> => {
        try{
            return this.manager.save(Tarefa, task)
        } catch (error) {
            return error
        }
    }

    getAllTasks = async (): Promise<Tarefa[] | null> => {
        try {
            return await this.manager.find(Tarefa, {})
        } catch (error) {
            return error
        }
    }

    getAllTaskNumbers =  async (): Promise<any | null> => {
        try {
            return await this.manager.find(Tarefa, { select: { "tarefa": true }})
        } catch (error) {
            return error
        }
    }

    getTasksByRegisterNumber = async (numero: string): Promise<Tarefa | null> => {
        return this.manager.findOne(Tarefa, {
            where: {
                numero_chamado: numero,
            }
        })
    }

    getTaskByNumber = async (numero: string): Promise<Tarefa | null> => {
        return this.manager.findOne(Tarefa, {
            where: {
                tarefa: numero,
            }
        })
    }

    getTasksByUser = async (analista: string): Promise<Tarefa | null> => {
        return this.manager.findOne(Tarefa, {
            where: {
                analista_task: analista,
            }
        })
    }

    updateTask = async (numeroChamado: string, task: Tarefa): Promise<any> => {
        let updatedTask = {
            id: task.id,
            numero_chamado: task.numero_chamado,
            tarefa: task.tarefa,
            analista_task: task.analista_task,
            equipe_task: task.equipe_task,
            classificacao_task: task.classificacao_task,
            sistema_task: task.sistema_task,
            motivo_task: task.motivo_task,
            data_task: task.data_task,
            mesa_task: task.mesa_task,
            justificativa_task: task.justificativa_task,
        }
        
        let response = await this.manager.save(
            Tarefa, 
            updatedTask,
        )

        console.log(`Chamado atualizado: ${response}`);
        return response
    }
}