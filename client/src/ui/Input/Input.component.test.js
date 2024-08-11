// client/src/ui/Input/Input.component.test.jsx
import React from "react";
import { render, screen } from "../../utils/test-utils";
import InputComp from "./Input.component";

describe("InputComp", () => {
  test("renders input with label", () => {
    render(<InputComp name="test" labelText="Test Label" />);

    const label = screen.getByLabelText("Test Label");
    const input = screen.getByRole("textbox", { name: "Test Label" });

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("renders input without label", () => {
    render(<InputComp name="test" />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(screen.queryByLabelText("Test Label")).not.toBeInTheDocument();
  });

  test("passes props to input element", () => {
    render(<InputComp name="test" placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");

    expect(input).toHaveAttribute("name", "test");
    expect(input).toHaveAttribute("placeholder", "Enter text");
  });
});
