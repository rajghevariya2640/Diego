import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { createContext, useState } from "react";
import CustomTheme from "./Theme";

const ThemeContext = createContext({
  toggleTheme: () => {},
  mode: "light",
});

export const ThemeProviderWrapper = ({ children }) => {
  const [mode, setMode] = useState(
    localStorage.getItem("theme-mode") || "light"
  );

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme-mode", newMode);
  };

  const theme = CustomTheme(mode);
  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
