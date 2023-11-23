import { EntityManager } from "typeorm";
import { Register } from "../entities/Register";
;

export class RegisterService {
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ) {
        this.manager = manager;
    }

    createRegister = async (register: Register) => {
        return this.manager.save(register)
    }

    getAllRegisters = async (): Promise<Register[] | null> => {
        return this.manager.find(Register, {})
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

    updateRegister = async (register: Register): Promise<Register | null> => {
        let response = await this.manager.update(
            Register, 
            {number: register.number}, 
            {
                number: register.number,
                task: register.task,
                sctask: register.sctask,
                date: register.date,
                user: register.user,
                team: register.team,
                supervisor: register.supervisor,
                classification: register.classification,
                system: register.system,
                fixProc: register.fixProc,
                observations: register.observations,
                supervisorObservations: register.supervisorObservations
            }
        ).then((res) => response)

        return response;
    }
}