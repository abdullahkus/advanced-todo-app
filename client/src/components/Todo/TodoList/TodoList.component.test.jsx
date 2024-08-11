import { render, screen, waitFor } from "../../../utils/test-utils";
import TodoListComp from "./TodoList.component";
import userEvent from "@testing-library/user-event";

describe("TodoListComp", () => {
  const mockTodoList = [
    { id: 1, todo: "Test todo 1", completed: false },
    { id: 2, todo: "Test todo 2", completed: true },
  ];

  const mockFetchDeleteTodo = jest.fn();
  const mockChangeTodo = jest.fn();
  const mockChangeCompleted = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders TodoListComp with todo items", () => {
    render(
      <TodoListComp
        todoList={mockTodoList}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    expect(screen.getByText("Test todo 1")).toBeInTheDocument();
    expect(screen.getByText("Test todo 2")).toBeInTheDocument();
  });

  test("renders message when todo list is empty", () => {
    render(
      <TodoListComp
        todoList={[]}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    expect(screen.getByText("There is nothing to do yet!")).toBeInTheDocument();
  });

  test("calls fetchDeleteTodo when delete button is clicked", async () => {
    render(
      <TodoListComp
        todoList={mockTodoList}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    userEvent.click(screen.getAllByText("x")[0]);

    await waitFor(() => {
      expect(mockFetchDeleteTodo).toHaveBeenCalledWith(mockTodoList[0].id);
    });
  });

  test("calls changeTodo when save button is clicked", async () => {
    render(
      <TodoListComp
        todoList={mockTodoList}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    await userEvent.click(screen.getAllByText("Edit")[0]);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, " updated");
    await userEvent.click(screen.getAllByText("Save")[0]);

    await waitFor(() => {
      expect(mockChangeTodo).toHaveBeenCalledWith(
        mockTodoList[0].id,
        "Test todo 1 updated"
      );
    });
  });

  test("calls changeCompleted when todo item is clicked", async () => {
    render(
      <TodoListComp
        todoList={mockTodoList}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    userEvent.click(screen.getByText("Test todo 1"));

    await waitFor(() => {
      expect(mockChangeCompleted).toHaveBeenCalledWith(mockTodoList[0].id);
    });
  });
});
