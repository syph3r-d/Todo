import { MoonLoader } from "react-spinners";
import { TaskCard } from "../components/TaskCard";
import { useQuery } from "@tanstack/react-query";
import TasksService from "../services/TasksService";
import { TaskForm } from "../components/TaskForm";

export const Todos = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: TasksService.getTasks,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="w-full h-screen">
      <div className="mx-12 my-4 rounded-xl  border p-4 border-gray-300 bg-gray-200">
        <div className="bg-white py-4 rounded-xl">
          <div className="flex ">
            <div className="flex-1 border-r border-gray-300 px-12">
              <TaskForm />
            </div>
            <div className="flex-1 px-12">
              <div className="flex flex-col gap-2">
                {isLoading ? (
                  <div className="flex">
                    <MoonLoader
                      size={15}
                      color="#000"
                      loading={isLoading}
                      className="mx-auto"
                    />
                  </div>
                ) : isError ? (
                  <div className="flex text-red-500">
                    <span className="mx-auto">Error loading tasks</span>
                  </div>
                ) : (
                  data?.data?.map((task: any) => (
                    <TaskCard
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      description={task.description}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
