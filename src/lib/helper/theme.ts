import { getThemeMode } from "../../context/useTheme";

const getModeStyle = (mode: "dark" | "light") => {
  switch (mode) {
    case "dark":
      return getThemeMode("dark")?.colors;
    case "light":
      return getThemeMode("light")?.colors;
  }
};

export { getModeStyle };
