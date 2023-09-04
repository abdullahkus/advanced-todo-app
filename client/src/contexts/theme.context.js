import { createContext, useState } from "react";
// Third Party
import { ThemeProvider as StyledThemeProvider } from "styled-components";
// Styles
import { lightTheme } from "../styles/themes/LightTheme.styles";
import { darkTheme } from "../styles/themes/DarkTheme.styles";

export const ThemeContext = createContext({
  currentTheme: lightTheme,
  setCurrentTheme: () => null,
  changeCurrentTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const changeCurrentTheme = () => {
    if (currentTheme === lightTheme) {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  };

  const value = { currentTheme, changeCurrentTheme };

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
