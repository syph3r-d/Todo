import express from "express";
import todoController from "../../controllers/todoController";
import todoValidations from "../../validations/todos";

const router = express.Router();

router.post("/", todoValidations.addTodo, todoController.createTodo);
router.get("/", todoController.getTodo);
router.put("/:id", todoValidations.updateTodo, todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

export default router;
