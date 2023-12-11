import { EntityManager } from "typeorm";
import { Chamado } from "../entities/Chamado";;
;
export class ChamadoServices {
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ) {
        this.manager = manager;
    }

    createRegister = async (register: Chamado): Promise<Chamado> => {
        try{
            return this.manager.save(Chamado, register)
        } catch (error) {
            return error
        }
    }

    getAllRegisters = async (): Promise<Chamado[] | null> => {
        try {
            return await this.manager.find(Chamado, {})
        } catch (error) {
            return error
        }
    }

    getAllRegistersNumbers =  async (): Promise<any | null> => {
        try {
            return await this.manager.find(Chamado, { select: { numero_chamado: true }})
        } catch (error) {
            return error
        }
    }

    getRegisterByNumber = async (numero: string): Promise<Chamado | null> => {
        return this.manager.findOne(Chamado, {
            where: {
                numero_chamado: numero,
            }
        })
    }

    getRegisterByUser = async (analista: string): Promise<Chamado | null> => {
        return this.manager.findOne(Chamado, {
            where: {
                analista_task: analista,
            }
        })
    }

    updateRegister = async (numeroChamado: string, chamado: Chamado): Promise<any> => {
        let updatedRegister = {
            numero_chamado: chamado.numero_chamado,
            task: chamado.task,
            sctask: chamado.sctask,
            analista_task: chamado.analista_task,
            equipe: chamado.equipe,
            classificacao: chamado.classificacao,
            sistema: chamado.sistema,
            justificativa: chamado.justificativa,
            analise_supervisor: chamado.analise_supervisor,
            analise_sniper: chamado.analise_sniper,
            analise_conclusao: chamado.analise_conclusao
        }
        
        let response = await this.manager.update(
            Chamado, 
            {numero_chamado: `${chamado.numero_chamado}`}, 
            updatedRegister
        )

        console.log(`Chamado atualizado: ${response}`);
        return response
    }
}