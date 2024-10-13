import { colors } from "../styles/colors";

export const getModeStyle = (mode: "light" | "dark") => {
  const light = mode === "light";

  const modeStyles = light
    ? {
        tabListBg: colors.gray[100],
        lineBorder: colors.neutral[200],
        active_TabColor: colors.blue[600],
        active_TabColor_Solid: "black",
      }
    : {
        tabListBg: colors.neutral[800],
        lineBorder: colors.neutral[700],
        active_TabColor: "white",
        active_TabColor_Solid: "black",
      };

  return modeStyles;
};
