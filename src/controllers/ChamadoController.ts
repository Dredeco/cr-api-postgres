import { randomUUID } from 'crypto';
import { Request, Response } from "express";
import { ChamadoServices } from "../services/ChamadoServices";
import { AppDataSource } from "../database";
import { Chamado } from "../entities/Chamado";

export class ChamadoController {
    chamadoServicos: ChamadoServices

    constructor(
        registerService = new ChamadoServices(AppDataSource.manager)
    ){
        this.chamadoServicos = registerService;
    }

    createRegister = async (req: Request, res: Response) => {
        const chamado: Chamado = req.body;
        const findRegister = await this.chamadoServicos.getRegisterByNumber(chamado.numero_chamado)
        
        if(findRegister) {
            return res.status(400).json({message: `Bad Request - O chamado ${chamado.numero_chamado} já existe`})
        }

        chamado.id = randomUUID()
        
        await this.chamadoServicos.createRegister(chamado)
        return res.status(201).json({message: `Registro criado: ${chamado.numero_chamado}`})
    }

    getAllRegisters = async (req: Request, res: Response) => {
        const registers = await this.chamadoServicos.getAllRegisters()
        return res.status(200).json({registers})
    }

    getAllRegistersNumbers = async (req: Request, res: Response) => {
        const registers = await this.chamadoServicos.getAllRegistersNumbers()
        return res.status(200).json({registers})
    }

    getRegisterByNumber = async (req: Request, res: Response) => {
        const registerNumber = req.params.numero
        const register = await this.chamadoServicos.getRegisterByNumber(registerNumber)
        return res.status(200).json(register)
    }

    getRegisterByUser = async (req: Request, res: Response) => {
        const userName = req.params.nome
        const userRegisters = await this.chamadoServicos.getRegisterByUser(userName)
        return res.status(200).json(userRegisters)
    }

    updateRegister = async (req: Request, res: Response) => {
        const registerNumber = req.params.numero
        const register = req.body
        await this.chamadoServicos.updateRegister(registerNumber, register)
        console.log(registerNumber, register)
        return res.status(202).json({message: "Chamado atualizado:" + registerNumber})
    }
}