import { Request, Response } from "express";
import { validationResult } from "express-validator";

import dbMain from "../database/models/";

const todoController = {
  createTodo: async (req: Request, res: Response): Promise<any> => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ msg: "Invalid input", errors: errors.array() });
      }
      const { title, description } = req.body;
      await dbMain.Todo.create(
        {
          title,
          description,
        },
        { transaction: null }
      );
      return res.status(201).json({
        success: true,
        message: "Todo created successfully.",
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },

  getTodo: async (req: Request, res: Response): Promise<any> => {
    try {
      const todos = await dbMain.Todo.findAll();
      return res.status(200).json({
        success: true,
        data: todos,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },

  updateTodo: async (req: Request, res: Response): Promise<any> => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ msg: "Invalid input", errors: errors.array() });
      }
      const { id } = req.params;
      const { title, description, done } = req.body;
      const todo = await dbMain.Todo.findByPk(id);
      if (!todo) {
        return res
          .status(404)
          .json({ success: false, message: "Todo not found." });
      }
      const updatedTodo = await todo.update(
        {
          title,
          description,
          done,
          updatedAt: new Date(),
        },
        { transaction: null }
      );
      return res.status(200).json({
        success: true,
        message: "Todo updated successfully.",
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },

  deleteTodo: async (req: Request, res: Response): Promise<any> => {
    try {
      const { id } = req.params;
      const todo = await dbMain.Todo.findByPk(id);
      if (!todo) {
        return res
          .status(404)
          .json({ success: false, message: "Todo not found." });
      }
      await todo.destroy({ transaction: null });
      return res.status(204).json({
        success: true,
        message: "Todo deleted successfully.",
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error." });
    }
  },
};

export default todoController;
