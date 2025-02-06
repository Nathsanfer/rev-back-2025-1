// Importar o Router do Express
import { Router } from  "express";

// // Importa os controladores de usuários
import {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/users.controller.js";

// Cria uma nova instância do Router
const usersRouter = Router();

// Define as rotas e os controladores
usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUsersById);
usersRouter.post("/", createUser);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;