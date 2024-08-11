import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContext } from "../contexts/theme.context";
import { lightTheme } from "../styles/themes/LightTheme.styles";

export const mockChangeCurrentTheme = jest.fn();

const customRender = (ui, { providerProps, ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <ThemeContext.Provider
      value={{ changeCurrentTheme: mockChangeCurrentTheme }}
    >
      <StyledThemeProvider theme={lightTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
export * from "@testing-library/jest-dom";

// override render method
export { customRender as render };
