import { Task } from "../types";
import config from "../config";

const TasksService = {
  getTasks: async () => {
    const response = await fetch(`${config.backend}/tasks`);
    return response.json();
  },
  addTask: async (task: Task) => {
    const response = await fetch(`${config.backend}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    return response.json();
  },
  deleteTask: async (id: string) => {
    const response = await fetch(`${config.backend}/tasks/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};

export default TasksService;
