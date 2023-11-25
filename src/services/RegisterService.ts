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

    getRegisterByNumber = async (number: string): Promise<Register | null> => {
        return this.manager.findOne(Register, {
            where: {
                number: number,
            }
        })
    }

    getRegisterByUser = async (user: string): Promise<Register | null> => {
        return this.manager.findOne(Register, {
            where: {
                user: user,
            }
        })
    }

    updateRegister = async (registerNumber: string, register: Register): Promise<Register | null> => {
        let updatedRegister = {
            number: register.number,
            task: register.task,
            sctask: register.sctask,
            date: register.date,
            user: register.user,
            team: register.team,
            supervisor: register.supervisor,
            classification: register.classification,
            system: register.system,
            motive: register.motive,
            fixProc: register.fixProc,
            observations: register.observations,
            supervisorObservations: register.supervisorObservations,
            sniperObservations: register.sniperObservations,
            finalObservations: register.finalObservations
        }
        
        let response = await this.manager.update(
            Register, 
            {number: `${registerNumber}`}, 
            updatedRegister
        )

        console.log(response);
        return
    }
}