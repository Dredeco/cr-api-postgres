import { Request, Response, Router } from "express";
import { ChamadoController } from "../controllers/ChamadoController";

const router = Router()
const chamadoController = new ChamadoController()

router
    .route("/chamados")
    .get((req: Request, res: Response) => chamadoController.getAllRegisters)

router
    .route("/chamados/numero")
    .get((req: Request, res: Response) => chamadoController.getAllRegistersNumbers)

router
    .route("/chamados/:numero")
    .get((req: Request, res: Response) => chamadoController.getRegisterByNumber)

router
    .route("/chamados")
    .post((req: Request, res: Response) => chamadoController.createRegister)

router
    .route("/chamados/:numero")
    .patch((req: Request, res: Response) => chamadoController.updateRegister)

module.exports = router;