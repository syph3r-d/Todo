// TaskCard.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TaskCard } from "../src/components/TaskCard";
import TasksService from "../src/services/TasksService";
import "@testing-library/jest-dom"; // Add this line at the top of your test file

jest.mock("../src/services/TasksService");

jest.mock("../src/config", () => ({
  backend: "backend_url",
}));

describe("TaskCard", () => {
  it("renders task title and description", () => {
    const queryClient = new QueryClient();
    const task = {
      id: "1",
      title: "Task Name",
      description: "Task Description",
    };
    render(
      <QueryClientProvider client={queryClient}>
        <TaskCard {...task} />
      </QueryClientProvider>
    );

    expect(screen.getByText(/Task Name/)).toBeInTheDocument();
    expect(screen.getByText(/Task Description/)).toBeInTheDocument();
  });

  it("calls onDone and updates query on button click", async () => {
    const queryClient = new QueryClient();
    const task = {
      id: "1",
      title: "Task 1",
      description: "Task 1 description",
    };
    const mockUpdateTask = jest.fn().mockResolvedValue({ success: true });
    TasksService.updateTask = mockUpdateTask;

    render(
      <QueryClientProvider client={queryClient}>
        <TaskCard {...task} />
      </QueryClientProvider>
    );

    const button = screen.getByText(/Done/);
    fireEvent.click(button);

    expect(mockUpdateTask).toHaveBeenCalledWith({
      id: "1",
      title: "Task 1",
      description: "Task 1 description",
      done: true,
    });

    await waitFor(() =>
      expect(screen.queryByText(/Task 1 description/)).toBeInTheDocument()
    );
  });
});
