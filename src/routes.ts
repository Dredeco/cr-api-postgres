import { Router } from "express";
import { RegisterController } from "./controllers/RegisterController";
import { LoginController } from "./controllers/LoginController";

export const router = Router()

const registerController = new RegisterController()
const loginController = new LoginController()

router.post("/login", loginController.login)

router.get("/register", registerController.getAllRegisters)
router.get("/register/:number")
router.get("/register/:user")

router.post("/register", registerController.createRegister)
router.patch("/register/:number")