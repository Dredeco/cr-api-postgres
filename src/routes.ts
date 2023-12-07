import { Router } from "express";
import { ChamadoController } from "./controllers/ChamadoController";

export const router = Router()

const registerController = new ChamadoController()

router.get("/chamados", registerController.getAllRegisters)
router.get("/chamados/numero", registerController.getAllRegistersNumbers)
router.get("/chamados/:numero", registerController.getRegisterByNumber)

router.post("/chamados", registerController.createRegister)
router.patch("/chamados/:numero", registerController.updateRegister)