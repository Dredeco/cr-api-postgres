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
                analista_chamado: analista,
            }
        })
    }

    updateRegister = async (numeroChamado: string, chamado: Chamado): Promise<any> => {
        let updatedRegister = {
            id: chamado.id,
            numero_chamado: chamado.numero_chamado,
            tarefas: chamado.tarefas,
            analista_chamado: chamado.analista_chamado,
            equipe_chamado: chamado.equipe_chamado,
            data_chamado: chamado.data_chamado,
            grupo_spoc: chamado.grupo_spoc,
            spoc_designado: chamado.spoc_designado,
            n1_resolveria: chamado.n1_resolveria,
            classificacao_chamado: chamado.classificacao_chamado,
            motivo_chamado: chamado.motivo_chamado,
            sistema_chamado: chamado.sistema_chamado,
            justificativa_chamado: chamado.justificativa_chamado,
            analise_spoc: chamado.analise_spoc,
            analise_supervisor: chamado.analise_supervisor,
            analise_sniper: chamado.analise_sniper,
            repasse_indevido: chamado.repasse_indevido,
            analise_conclusao: chamado.analise_conclusao,
            nome_artigo: chamado.nome_artigo,
            solicitacao_artigo: chamado.solicitacao_artigo,
            validacao_artigo: chamado.validacao_artigo,
            justificativa_artigo: chamado.justificativa_artigo
        }
        
        let response = await this.manager.save(
            Chamado, 
            updatedRegister,
        )

        console.log(`Chamado atualizado: ${response}`);
        return response
    }
}