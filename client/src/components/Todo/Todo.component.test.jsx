import { render, screen, waitFor, act } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import TodoComp from "./Todo.component";
import * as todoService from "../../services/todo.service";

jest.mock("../../services/todo.service");

describe("TodoComp", () => {
  const mockTodos = [
    { id: 1, todo: "Test Todo 1", completed: false },
    { id: 2, todo: "Test Todo 2", completed: true },
  ];

  beforeEach(() => {
    act(() => {
      todoService.getAllTodo.mockResolvedValue({ data: mockTodos });
    });
  });

  test("renders TodoComp and fetches todos", async () => {
    render(<TodoComp />);

    await waitFor(() => {
      expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
    });
  });

  test("adds a new todo", async () => {
    const newTodo = { id: 3, todo: "New Todo", completed: false };
    todoService.addTodo.mockResolvedValue({ data: newTodo });

    render(<TodoComp />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("New Todo")).toBeInTheDocument();
    });
  });

  test("deletes a todo", async () => {
    render(<TodoComp />);

    await waitFor(() => {
      expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    });

    const deleteButton = screen.getAllByText("x")[0];
    await userEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("Test Todo 1")).not.toBeInTheDocument();
    });
  });

  test("toggles todo completion", async () => {
    todoService.updateTodo.mockResolvedValue({
      data: { ...mockTodos[0], completed: true },
    });

    render(<TodoComp />);

    await waitFor(() => {
      expect(screen.getByText(mockTodos[0].todo)).toBeInTheDocument();
    });

    const text = screen.getByText(mockTodos[0].todo);
    await userEvent.click(text);

    await waitFor(() => {
      expect(todoService.updateTodo).toHaveBeenCalledWith(
        1,
        expect.objectContaining({ completed: true })
      );
    });
  });

  test("edits a todo", async () => {
    const updatedTodo = { ...mockTodos[0], todo: "Updated Todo" };

    todoService.updateTodo.mockResolvedValue({ data: updatedTodo });

    render(<TodoComp />);

    await waitFor(() => {
      expect(screen.getByText(mockTodos[0].todo)).toBeInTheDocument();
    });

    const buttons = screen.getAllByText("Edit");
    await userEvent.click(buttons[0]);

    const input = screen.getByDisplayValue(mockTodos[0].todo);
    await userEvent.clear(input);
    await userEvent.type(input, "Updated Todo");

    const saveButton = screen.getByText("Save");
    await userEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Updated Todo")).toBeInTheDocument();
    });
  });

  test("filters todos", async () => {
    render(<TodoComp />);

    await waitFor(() => {
      expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    });

    const activeFilter = screen.getByText("Active");
    await userEvent.click(activeFilter);

    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    expect(screen.queryByText("Test Todo 2")).not.toBeInTheDocument();

    const completedFilter = screen.getByText("Completed");
    await userEvent.click(completedFilter);

    expect(screen.queryByText("Test Todo 1")).not.toBeInTheDocument();
    expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
  });

  test("displays correct todo count", async () => {
    render(<TodoComp />);

    await waitFor(() => {
      expect(screen.getByText("2 items left")).toBeInTheDocument();
    });
  });
});
