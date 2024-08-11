import { render, screen, waitFor } from "../../../../utils/test-utils";
import TodoListItemComp from "./TodoListItem.component";
import userEvent from "@testing-library/user-event";

describe("TodoListItemComp", () => {
  const mockTodo = {
    id: 1,
    todo: "Test todo",
    completed: false,
  };

  const mockFetchDeleteTodo = jest.fn();
  const mockChangeTodo = jest.fn();
  const mockChangeCompleted = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders todo item", () => {
    render(
      <TodoListItemComp
        todo={mockTodo}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    expect(screen.getByText("Test todo")).toBeInTheDocument();
  });

  test("calls changeCompleted when todo item is clicked", async () => {
    render(
      <TodoListItemComp
        todo={mockTodo}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    userEvent.click(screen.getByText("Test todo"));

    await waitFor(() => {
      expect(mockChangeCompleted).toHaveBeenCalledWith(mockTodo.id);
    });
  });

  test("enters edit mode when edit button is clicked", async () => {
    render(
      <TodoListItemComp
        todo={mockTodo}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    userEvent.click(screen.getByText("Edit"));

    await waitFor(() => {
      expect(screen.getByRole("textbox")).toHaveValue(mockTodo.todo);
    });
  });

  test("calls changeTodo when save button is clicked", async () => {
    render(
      <TodoListItemComp
        todo={mockTodo}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    userEvent.click(screen.getByText("Edit"));

    // Wait for the textbox to appear
    const textbox = await screen.findByRole("textbox");
    await userEvent.type(textbox, " updated");

    userEvent.click(screen.getByText("Save"));

    await waitFor(() => {
      expect(mockChangeTodo).toHaveBeenCalledWith(
        mockTodo.id,
        "Test todo updated"
      );
    });
  });

  test("calls fetchDeleteTodo when delete button is clicked", async () => {
    render(
      <TodoListItemComp
        todo={mockTodo}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    userEvent.click(screen.getByText("x"));

    await waitFor(() => {
      expect(mockFetchDeleteTodo).toHaveBeenCalledWith(mockTodo.id);
    });
  });

  test("cancels edit mode when cancel button is clicked", async () => {
    render(
      <TodoListItemComp
        todo={mockTodo}
        fetchDeleteTodo={mockFetchDeleteTodo}
        changeTodo={mockChangeTodo}
        changeCompleted={mockChangeCompleted}
      />
    );

    userEvent.click(screen.getByText("Edit"));

    // Wait for the textbox to appear
    const textbox = await screen.findByRole("textbox");
    userEvent.type(textbox, " updated");

    userEvent.click(screen.getByText("x"));

    await waitFor(() => {
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Test todo")).toBeInTheDocument();
    });
  });
});
