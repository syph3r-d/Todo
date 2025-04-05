import express from "express";
import todoController from "../../controllers/todoController";
import todoValidations from "../../validations/todos";

const router = express.Router();

router.post("/", todoController.createTodo, todoValidations.addTodo);
router.get("/", todoController.getTodo);
router.put("/:id", todoController.updateTodo, todoValidations.updateTodo);
router.delete("/:id", todoController.deleteTodo);

export default router;
