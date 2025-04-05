import { check } from "express-validator";

export default {
  addTodo: [
    check("title", "Title is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
  ],
  updateTodo: [
    check("title", "Title is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("done", "Done is required").isBoolean(),
  ],
};
