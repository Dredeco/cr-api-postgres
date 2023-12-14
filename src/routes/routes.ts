import { Router } from "express";
import { ChamadoController } from "../controllers/ChamadoController";
import { TarefaController } from "../controllers/TarefaController";

const router = Router()

// CHAMADOS
const chamadosRouter = require('./chamados')
router.use(chamadosRouter)

// TAREFAS ROUTER
const tarefasRouter = require('./tarefas')
router.use(tarefasRouter)

module.exports = router;