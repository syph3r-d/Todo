import { useState } from "react";
import TasksService from "../services/TasksService";
import { Button, Input } from "./forms";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";

export const TaskForm = () => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const task = { title, description };
    const res = await TasksService.addTask(task);
    queryClient.invalidateQueries([
      "tasks",
    ] as unknown as InvalidateQueryFilters);
    if (res.success) {
      console.log("Task added successfully");
    } else {
      console.error("Error adding task");
    }

    setIsLoading(false);
  };
  return (
    <div>
      <div className="font-bold text-lg text-start">Add a Task</div>
      <form onSubmit={onSubmit}>
        <Input type="text" required placeholder="Title" name="title" />
        <Input
          type="text"
          required
          placeholder="Description"
          name="description"
        />
        <div className="flex justify-end">
          <Button
            varient="primary"
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};
