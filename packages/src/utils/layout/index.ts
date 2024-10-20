import { colors } from "../../styles/colors";
import { CardProps } from "../../types/sui";

export const cardStyles = (mode: CardProps["mode"]) => {
  return {
    background: mode === "dark" ? "black" : "white",
    drawerBg: mode === "dark" ? "black" : "white",
    boxShadow:
      mode === "dark"
        ? `0 4px 8px ${colors.slate[950]}`
        : "0 4px 8px rgba(0, 0, 0, 0.1)",
    border:
      mode === "dark"
        ? `1px solid ${colors.neutral[900]}`
        : `1px solid ${colors.neutral[200]}`,
  };
};

export const getTabVariantStyle = (
  varaint: "line" | "solid",
  isCurrent: boolean,
  activeColor: string,
  inActiveColor: string,
  disabled: boolean
) => {
  switch (varaint) {
    case "solid":
      return {
        background: isCurrent ? "white" : "transparent",
        "border-radius": "5px",
        filter: isCurrent
          ? "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))"
          : "",
        color: isCurrent ? activeColor : inActiveColor,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        "pointer-events": disabled ? "none" : "all",
      };
    case "line":
      return {
        background: "transparent",
        "border-bottom-width": `2px`,
        "border-bottom-style": `solid`,
        "border-bottom-color": isCurrent ? activeColor : "transparent",
        color: isCurrent ? activeColor : inActiveColor,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        "pointer-events": disabled ? "none" : "all",
      };
  }
};
