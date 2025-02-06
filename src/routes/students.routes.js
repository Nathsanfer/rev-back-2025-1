// Importar o Router do Express
import { Router } from  "express";

// // Importa os controladores de usuários
import {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
} from "../controllers/students.controller.js";

// Cria uma nova instância do Router
const studentsRouter = Router();

// Define as rotas e os controladores
studentsRouter.get("/", getStudents);
studentsRouter.get("/:id", getStudent);
studentsRouter.post("/", createStudent);
studentsRouter.put("/:id", updateStudent);
studentsRouter.delete("/:id", deleteStudent);

// Exporta o router
export default studentsRouter;