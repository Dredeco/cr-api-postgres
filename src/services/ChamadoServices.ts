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
            return await this.manager.find(Chamado, { select: { numero: true }})
        } catch (error) {
            return error
        }
    }

    getRegisterByNumber = async (numero: string): Promise<Chamado | null> => {
        return this.manager.findOne(Chamado, {
            where: {
                numero: numero,
            }
        })
    }

    getRegisterByUser = async (analista: string): Promise<Chamado | null> => {
        return this.manager.findOne(Chamado, {
            where: {
                analista: analista,
            }
        })
    }

    updateRegister = async (numeroChamado: string, chamado: Chamado): Promise<any> => {
        let updatedRegister = {
            numero: chamado.numero,
            task: chamado.task,
            sctask: chamado.sctask,
            data: chamado.data,
            mesaTarefa: chamado.mesaTarefa,
            mesaChamado: chamado.mesaChamado,
            status: chamado.status,
            analista: chamado.analista,
            equipe: chamado.equipe,
            supervisor: chamado.supervisor,
            classificacao: chamado.classificacao,
            sistema: chamado.sistema,
            corrigirArtigo: chamado.corrigirArtigo,
            justificativa: chamado.justificativa,
            analiseSupervisor: chamado.analiseSupervisor,
            analiseSniper: chamado.analiseSniper,
            analiseConclusao: chamado.analiseConclusao
        }
        
        let response = await this.manager.update(
            Chamado, 
            {numero: `${chamado.numero}`}, 
            updatedRegister
        )

        console.log(`Chamado atualizado: ${response}`);
        return response
    }
}