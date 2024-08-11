// client/src/ui/Button/Button.component.test.jsx
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "../../utils/test-utils";
import ButtonComp, { BUTTON_TYPE_CLASSES } from "./Button.component";

describe("ButtonComp", () => {
  test("renders base button with children", () => {
    render(
      <ButtonComp buttonType={BUTTON_TYPE_CLASSES.base}>Base Button</ButtonComp>
    );

    const button = screen.getByRole("button", { name: "Base Button" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(BUTTON_TYPE_CLASSES.base);
  });

  test("renders inverted button with children", () => {
    render(
      <ButtonComp buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Inverted Button
      </ButtonComp>
    );

    const button = screen.getByRole("button", { name: "Inverted Button" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(BUTTON_TYPE_CLASSES.inverted);
  });

  test("passes props to button element", () => {
    render(
      <ButtonComp buttonType={BUTTON_TYPE_CLASSES.base} disabled>
        Disabled Button
      </ButtonComp>
    );

    const button = screen.getByRole("button", { name: "Disabled Button" });

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
