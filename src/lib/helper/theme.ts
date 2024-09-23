import { colors } from "../../styles/colors";
import { useThemeMode } from "../../context/useTheme";

const getModeStyle = (mode: "dark" | "light") => {
  switch (mode) {
    case "dark":
      return useThemeMode("dark")?.colors;
    case "light":
      return useThemeMode("light")?.colors;
  }
};

const modeColors = {
  light: {
    background: "#ffffff",
    text: "#000000",
    outline_ButtonBorderColor: colors.neutral[200],
    active_TabColor: "black", //TabHandle active color
    active_TabColor_Solid: "black", //TabHandle active color for solid varaint
    inActiveTabColor: colors.neutral[400], //TabHandle inactive color
    tabListBackground: colors.gray[100], //TabList BackgroundColor
    button_OutlineHoverColor: colors.gray[50],
    card: "white",
    card_BorderColor: colors.neutral[200],
    cardShadow: "rgba(0, 0, 0, 0.1)",
    icon: "white",
    drop: "rgb(255, 255, 255, 0.5)",
    checkBoxBorderColor: colors.neutral[200],
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    outline_ButtonBorderColor: colors.neutral[800],
    active_TabColor: "white", //TabHandle active color
    active_TabColor_Solid: "black", //TabHandle active color for solid variant
    inActiveTabColor: colors.neutral[800], //TabHandle inactive color
    tabListBackground: colors.neutral[800], //TabList BackgroundColor
    button_OutlineHoverColor: "rgb(59,130,246,.1)",
    card: "#000000",
    card_BorderColor: colors.neutral[800],
    cardShadow: "rgba(255, 255, 255, 0.1)",
    icon: "black",
    drop: "rgb(0,0,0, 0.6)",
    checkBoxBorderColor: colors.neutral[700],
  },
};

export { getModeStyle, modeColors };
