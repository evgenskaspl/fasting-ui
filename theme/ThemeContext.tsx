import React, { createContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./theme";

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useColorScheme(); // Get system theme (dark/light)
  const [theme, setTheme] = useState(
    systemTheme === "dark" ? darkTheme : lightTheme
  );

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    setTheme(systemTheme === "dark" ? darkTheme : lightTheme);
  }, [systemTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
