import { Router } from "express";
import { RegisterController } from "./controllers/RegisterController";

export const router = Router()

const registerController = new RegisterController()

router.get("/register", registerController.getAllRegisters)
router.get("/register/number", registerController.getAllRegistersNumbers)
router.get("/register/:number", registerController.getRegisterByNumber)
router.get("/register/:user")

router.post("/register", registerController.createRegister)
router.patch("/register/:number", registerController.updateRegister)