import { EntityManager } from "typeorm";
import { Register } from "../entities/Register";;
;
export class RegisterService {
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ) {
        this.manager = manager;
    }

    createRegister = async (register: Register): Promise<Register> => {
        try{
           return this.manager.save(Register, register)
        } catch (error) {
            return error
        }
    }

    getAllRegisters = async (): Promise<Register[] | null> => {
        try {
            return await this.manager.find(Register, {})
        } catch (error) {
            return error
        }
    }

    getAllRegistersNumbers =  async (): Promise<any | null> => {
        try {
            return await this.manager.find(Register, { select: { numero: true }})
        } catch (error) {
            return error
        }
    }

    getRegisterByNumber = async (numero: string): Promise<Register | null> => {
        return this.manager.findOne(Register, {
            where: {
                numero: numero,
            }
        })
    }

    getRegisterByUser = async (analista: string): Promise<Register | null> => {
        return this.manager.findOne(Register, {
            where: {
                analista: analista,
            }
        })
    }

    updateRegister = async (registerNumber: string, register: Register): Promise<any> => {
        let updatedRegister = {
            classificacao: register.classificacao,
            sistema: register.sistema,
            motivo: register.motivo,
            corrigirArtigo: register.corrigirArtigo,
            justificativa: register.justificativa,
            analiseSupervisor: register.analiseSupervisor,
            analiseSniper: register.analiseSniper,
            analiseConclusao: register.analiseConclusao
        }
        
        let response = await this.manager.update(
            Register, 
            {numero: `${registerNumber}`}, 
            updatedRegister
        )

        console.log(`Chamado atualizado: ${response}`);
        return response
    }
}