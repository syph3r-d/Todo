import { Task } from "../types";
import config from "../config";

const TasksService = {
  getTasks: async () => {
    try {
      const response = await fetch(`${config.backend}/todo?done=false`);
      return response.json();
    } catch (error) {
      return { success: false, data: "Failed to fetch tasks" };
    }
  },
  addTask: async (task: { title: string; description: string }) => {
    try {
      const response = await fetch(`${config.backend}/todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      return response.json();
    } catch (error) {
      return { success: false, data: "Failed to add the task" };
    }
  },
  updateTask: async (task: Task) => {
    try {
      const response = await fetch(`${config.backend}/todo/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      return response.json();
    } catch (error) {
      return { success: false, data: "Failed to update the task" };
    }
  },
};

export default TasksService;
