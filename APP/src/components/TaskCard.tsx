import { useState } from "react";
import { Button } from "./forms";
import TasksService from "../services/TasksService";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { Task } from "../types";

export const TaskCard = ({ id, title, description }: Omit<Task, "done">) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const onDone = async () => {
    setIsLoading(true);
    const res = await TasksService.updateTask({
      id,
      title,
      description,
      done: true,
    });
    queryClient.invalidateQueries([
      "tasks",
    ] as unknown as InvalidateQueryFilters);
    if (!res.success) {
      alert(res.data);
    }

    setIsLoading(false);
  };
  return (
    <div className="rounded-xl bg-gray-300 p-4 drop-shadow-md" key={id}>
      <div className="text-lg font-bold">{title}</div>
      <div className="flex justify-between gap-2 items-center mt-2">
        <div className="font-bold text-sm">{description}</div>
        <Button
          varient="outlined"
          onClick={onDone}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Done
        </Button>
      </div>
    </div>
  );
};
