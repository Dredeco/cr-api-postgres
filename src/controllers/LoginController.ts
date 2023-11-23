import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { LoginService } from "../services/LoginService";

export class LoginController {
    loginService: LoginService

    constructor(
        loginService = new LoginService(AppDataSource.manager)
    ){
        this.loginService = loginService
    }

    login = async (req: Request, res: Response) => {
        const {registration, password} = req.body

        try {
            const token = await this.loginService.getToken(registration, password)
            return res.status(200).json({token})
        } catch (error) {
            return res.status(400).json({message: `${error}`})
        }
    }
}