// TaskForm.test.tsx
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TaskForm } from "../src/components/TaskForm";
import TasksService from "../src/services/TasksService";
import "@testing-library/jest-dom"; // Add this line at the top of your test file

jest.mock("../src/services/TasksService");
jest.mock("../src/config", () => ({
  backend: "backend_url",
}));

describe("TaskForm", () => {
  it("renders the form and submits data", async () => {
    const queryClient = new QueryClient();
    const mockAddTask = jest.fn().mockResolvedValue({ success: true });
    TasksService.addTask = mockAddTask;

    render(
      <QueryClientProvider client={queryClient}>
        <TaskForm />
      </QueryClientProvider>
    );

    const titleInput = screen.getByPlaceholderText(/Title/i);
    const descriptionInput = screen.getByPlaceholderText(/Description/i);
    const submitButton = screen.getByTestId("add-task-button");

    fireEvent.change(titleInput, { target: { value: "New Task" } });
    fireEvent.change(descriptionInput, {
      target: { value: "New Task description" },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockAddTask).toHaveBeenCalledWith({
        title: "New Task",
        description: "New Task description",
      });
      expect(
        screen.queryByText(/Task added successfully/i)
      ).toBeInTheDocument();
    });
  });
});
