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
        const findRegister = await this.registerService.getRegisterByNumber(register.numero)
        
        if(findRegister) {
            return res.status(400).json({message: 'Bad Request - O chamado já existe'})
        }
        
        register.id = randomUUID()
        register.analiseSupervisor = '',
        register.analiseSniper = '',
        register.analiseConclusao = '',
        register.corrigirArtigo = ''
        
        console.log(register)
        await this.registerService.createRegister(register)
        return res.status(201).json({message: `Registro criado: ${register.numero}`})
    }

    getAllRegisters = async (req: Request, res: Response) => {
        const registers = await this.registerService.getAllRegisters()
        return res.status(200).json({registers})
    }

    getAllRegistersNumbers = async (req: Request, res: Response) => {
        const registers = await this.registerService.getAllRegistersNumbers()
        return res.status(200).json({registers})
    }

    getRegisterByNumber = async (req: Request, res: Response) => {
        const registerNumber = req.params.numero
        const register = await this.registerService.getRegisterByNumber(registerNumber)
        return res.status(200).json({register})
    }

    updateRegister = async (req: Request, res: Response) => {
        const registerNumber = req.params.numero
        const register = req.body
        await this.registerService.updateRegister(registerNumber, register)
        return res.status(202).json({message: "Chamado atualizado.." + register.numero})
    }

    
}