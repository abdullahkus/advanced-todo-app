import {
  render,
  screen,
  mockChangeCurrentTheme,
  waitFor,
} from "../../../utils/test-utils";
import TodoAddComp from "./TodoAdd.component";
import userEvent from "@testing-library/user-event";

describe("TodoAdd", () => {
  const mockFetchAddTodo = jest.fn();

  test("renders TodoAddComp with title and form elements", () => {
    render(<TodoAddComp fetchAddTodo={mockFetchAddTodo} />);

    expect(screen.getByRole("heading", { name: "Todo" })).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
  });

  test("updates input value on change", async () => {
    render(<TodoAddComp fetchAddTodo={mockFetchAddTodo} />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "New Todo");

    await waitFor(() => {
      expect(input).toHaveValue("New Todo");
    });
  });

  test("calls fetchAddTodo on button click", async () => {
    render(<TodoAddComp fetchAddTodo={mockFetchAddTodo} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Add" });

    userEvent.type(input, "New Todo");
    userEvent.click(button);

    await waitFor(() => expect(input).toHaveValue(""));
  });

  test("calls changeCurrentTheme on title click", async () => {
    render(<TodoAddComp fetchAddTodo={mockFetchAddTodo} />);

    const title = screen.getByRole("heading", { name: "Todo" });

    userEvent.click(title);

    await waitFor(() => {
      expect(mockChangeCurrentTheme).toHaveBeenCalled();
    });
  });

  test("disables button when input is empty", () => {
    render(<TodoAddComp fetchAddTodo={mockFetchAddTodo} />);

    const button = screen.getByRole("button", { name: "Add" });
    expect(button).toBeDisabled();
  });
});
