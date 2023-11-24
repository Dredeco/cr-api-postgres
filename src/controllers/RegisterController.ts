import { Request, Response } from "express";
import { RegisterService } from "../services/RegisterService";
import { AppDataSource } from "../database";
import { Register } from "../entities/Register";
import { randomUUID } from 'crypto'

export class RegisterController {
    registerService: RegisterService

    constructor(
        registerService = new RegisterService(AppDataSource.manager)
    ){
        this.registerService = registerService;
    }

    createRegister = async (req: Request, res: Response) => {
        const register: Register = req.body;
        const findRegister = await this.registerService.getRegisterByNumber(register.number)
        
        if(findRegister) {
            return res.status(400).json({message: 'Bad Request - O chamado já existe'})
        }
        
        register.id = randomUUID()
        register.supervisorObservations = '',
        register.sniperObservations = '',
        register.finalObservations = '',
        
        console.log(register)
        await this.registerService.createRegister(register)
        return res.status(200).json({message: `Registro cadastrado: ${register.number}`})
    }

    getAllRegisters = async (req: Request, res: Response) => {
        const registers = await this.registerService.getAllRegisters()
        return res.status(200).json({registers})
    }
}