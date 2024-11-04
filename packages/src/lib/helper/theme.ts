import { getThemeMode } from "../../styled/hooks/useTheme";

const getModeStyle = (mode: "dark" | "light") => {
  switch (mode) {
    case "dark":
      return getThemeMode("dark")?.colors;
    case "light":
      return getThemeMode("light")?.colors;
  }
};

export { getModeStyle };
