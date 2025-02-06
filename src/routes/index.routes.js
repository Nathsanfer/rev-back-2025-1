import { Router } from "express";
import studentsRouter from "./students.routes.js";
import usersRouter from "./students.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  res.status(200).send({ message: "Servidor Rodando" });
});

router.use("/students", studentsRouter);
router.use("/users", usersRouter);

// Exporta as rotas
export { routes };