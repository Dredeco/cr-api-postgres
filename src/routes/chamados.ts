import { Request, Response, Router } from "express";
import { ChamadoController } from "../controllers/ChamadoController";

const router = Router()
const chamadoController = new ChamadoController()

router
    .route("/chamados")
    .get((req: Request, res: Response) => chamadoController.getAllRegisters(req, res))

router
    .route("/chamados/numero")
    .get((req: Request, res: Response) => chamadoController.getAllRegistersNumbers(req, res))

router
    .route("/chamados/:numero")
    .get((req: Request, res: Response) => chamadoController.getRegisterByNumber(req, res))

router
    .route("/chamados")
    .post((req: Request, res: Response) => chamadoController.createRegister(req, res))

router
    .route("/chamados/:numero")
    .patch((req: Request, res: Response) => chamadoController.updateRegister(req, res))

module.exports = router;