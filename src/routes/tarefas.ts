import { Request, Response, Router } from "express";
import { TarefaController } from "../controllers/TarefaController";

const router = Router()
const tarefaController = new TarefaController()

router
    .route("/tarefas")
    .get((req: Request, res: Response) => tarefaController.getAllTasks(req, res))

router
    .route("/tarefas/numero")
    .get((req: Request, res: Response) => tarefaController.getAllTasksNumbers(req, res))

router
    .route("/tarefas/:numero_chamado")
    .get((req: Request, res: Response) => tarefaController.getTasksByRegisterNumber(req, res))

router
    .route("/tarefas")
    .post((req: Request, res: Response) => tarefaController.createTask(req, res))

router
    .route("/tarefas/:tarefa")
    .patch((req: Request, res: Response) => tarefaController.updateTask(req, res))

module.exports = router;