import { DefaultTheme, DarkTheme } from "@react-navigation/native";

const tintColorLight = "#0a7ea4";
const white = "#ffffff";
const black = "#000000";
const primary = "#20C997";
const dot = "#D8D8D8";
const activeDot = "#FF7700";
const icon = "#687076";
const backgroundDark = "#373738ED";

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: white,
    text: black,
    primary: primary,
    buttonBg: primary,
    buttonText: black,
    tint: tintColorLight,
    icon,
    tabIconDefault: icon,
    tabIconSelected: tintColorLight,
    dot,
    activeDot,
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: backgroundDark,
    text: white,
    primary: primary,
    buttonBg: primary,
    buttonText: black,
    tint: black,
    icon,
    tabIconDefault: icon,
    tabIconSelected: black,
    dot,
    activeDot,
  },
};
