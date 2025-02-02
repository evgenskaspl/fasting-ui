import { useContext } from "react";
import { darkTheme, lightTheme } from "@/theme/theme";
import { ThemeContext } from "@/theme/ThemeContext";

type ColorKeysNativeTheme =
  | keyof typeof darkTheme.colors
  | keyof typeof lightTheme.colors;

export const useTheme = (
  colorName?: ColorKeysNativeTheme
): { theme: typeof darkTheme; toggleTheme: () => void; color?: string } => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const color = colorName ? theme.colors[colorName] : undefined;
  return {
    theme,
    toggleTheme,
    color,
  };
};
