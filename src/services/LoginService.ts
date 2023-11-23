import { EntityManager } from "typeorm";

export class LoginService {
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ){
        this.manager = manager;
    }

    getUserByRegistrationAndPassword = async (registration: string, password: string) => {
        const AutenticatedUser = await fetch("https://access-control.devgu.infraticampos.com.br/api-ac/auth/login", {
            method: "POST",
            headers: {
                "alg": "HS256",
                "typ": "JWT"
            },
            body:JSON.stringify({
                "username": `${registration}`, 
                "password": `${password}`
            })
        })

        return AutenticatedUser
    }

    getToken = async (registration: string, password: string) => {
        const user = await this.getUserByRegistrationAndPassword(registration, password)
    
        console.log(user)
    }
}