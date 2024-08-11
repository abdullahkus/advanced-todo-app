import { render, screen } from "../../../utils/test-utils";
import TodoInformationComp from "./TodoInformation.component";
import userEvent from "@testing-library/user-event";
jest.mock("axios");

describe("TodoInformation", () => {
  const mockChangeFilterType = jest.fn();

  test("renders TodoInformationComp with correct elements", () => {
    render(
      <TodoInformationComp
        todoListLength={5}
        changeFilterType={mockChangeFilterType}
      />
    );

    expect(screen.getByText("5 items left")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Active" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Completed" })
    ).toBeInTheDocument();
  });

  test("calls changeFilterType with 'all' when 'All' button is clicked", async () => {
    render(
      <TodoInformationComp
        todoListLength={5}
        changeFilterType={mockChangeFilterType}
      />
    );

    const allButton = screen.getByRole("button", { name: "All" });
    await userEvent.click(allButton);

    expect(mockChangeFilterType).toHaveBeenCalledWith("all");
  });

  test("calls changeFilterType with 'active' when 'Active' button is clicked", async () => {
    render(
      <TodoInformationComp
        todoListLength={5}
        changeFilterType={mockChangeFilterType}
      />
    );

    const activeButton = screen.getByRole("button", { name: "Active" });
    await userEvent.click(activeButton);

    expect(mockChangeFilterType).toHaveBeenCalledWith("active");
  });

  test("calls changeFilterType with 'completed' when 'Completed' button is clicked", async () => {
    render(
      <TodoInformationComp
        todoListLength={5}
        changeFilterType={mockChangeFilterType}
      />
    );

    const completedButton = screen.getByRole("button", { name: "Completed" });
    await userEvent.click(completedButton);

    expect(mockChangeFilterType).toHaveBeenCalledWith("completed");
  });
});
