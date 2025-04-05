import { useState } from "react";
import TasksService from "../services/TasksService";
import { Button, Input } from "./forms";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";

export const TaskForm = () => {
  const queryClient = useQueryClient();
  const [actionFeedback, setActionFeedback] = useState<{
    success: boolean;
    message: string;
  } | null>();
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
      setActionFeedback({
        success: true,
        message: "Task added successfully",
      });
      setTimeout(() => {
        setActionFeedback(null);
      }, 2000);
    } else {
      setActionFeedback({
        success: false,
        message: res.message,
      });
      setTimeout(() => {
        setActionFeedback(null);
      }, 2000);
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
            data-testid="add-task-button"
          >
            Add
          </Button>
        </div>
        {actionFeedback && (
          <div
            className={`${
              !actionFeedback.success ? "text-red-500" : "text-green-500"
            } text-sm mt-2`}
          >
            {actionFeedback.message}
          </div>
        )}
      </form>
    </div>
  );
};
