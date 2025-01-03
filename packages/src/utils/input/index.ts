import { colors } from "../../styles/colors";
import { InputType } from "../../types/sui";

const getColors = (
  outLineBorderColor: InputType["outLineBorderColor"],
  focusBorderColor: InputType["focusBorderColor"],
  focusColor: InputType["focusColor"],
  variant: InputType["variant"],
  error: InputType["hasError"],
  mode: InputType["mode"]
) => {
  if (error) {
    return {
      border: modeColors(mode).error_border,
      focusBorder: modeColors(mode).error_focusBorder,
      focusBox: modeColors(mode).error_focusBox,
    };
  }

  const baseColors = {
    focusBox: focusColor || colors.blue[500],
  };

  switch (variant) {
    case "solid":
    case "ghost":
      return {
        ...baseColors,
      };
    case "outline":
      return {
        border: outLineBorderColor || modeColors(mode).outline_border,
        focusBorder: focusBorderColor || modeColors(mode).outline_focusBorder,
        focusBox: focusColor || modeColors(mode).outline_focusBox,
      };
  }
};

// This function handles the colors for the input based on the mode
const modeColors = (mode: InputType["mode"]) => {
  const modeColors =
    mode === "dark"
      ? {
          neutral100: "#2E2E2E",
          neutral200: "#3C3C3C",
          solid: "#484848",
          outline: "#595959",
          ghost: colors.neutral[700],
          focusBox: "#66BB6A",
          outline_border: colors.neutral[800],
          error_border: colors.red[500],
          error_focusBorder: colors.red[500],
          error_focusBox: colors.red[400],
          outline_focusBorder: colors.blue[500],
          outline_focusBox: colors.blue[400],
        }
      : {
          neutral100: "#F9F9F9",
          neutral200: colors.neutral[200],
          solid: "#CCCCCC",
          outline: "#AAAAAA",
          ghost: colors.gray[100],
          focusBox: "#4CAF50",
          outline_border: colors.neutral[200],
          error_border: colors.red[500],
          error_focusBorder: colors.red[500],
          error_focusBox: colors.red[200],
          outline_focusBorder: colors.blue[500],
          outline_focusBox: colors.blue[200],
        };
  return modeColors;
};

const getSolidInputStyles = ({
  mode,
  disabled,
  hasError,
  variant,
  focusBorderColor,
  focusColor,
  outLineBorderColor,
  onHoverBg,
  backgroundColor,
}: InputType) => {
  const color = getColors(
    outLineBorderColor,
    focusBorderColor,
    focusColor,
    variant,
    hasError,
    mode
  );

  return {
    border: `1px solid ${color?.border}`,
    background: disabled
      ? modeColors(mode).neutral200
      : backgroundColor || modeColors(mode).neutral100,
    color: mode === "dark" ? "#fff" : "#333",
    boxShadow: `inset 0 2px 4px ${modeColors(mode).solid}`,
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    focus: {
      boxShadow: `0 0 0 2px ${color?.focusBox}`,
      background: modeColors(mode).neutral100,
      border: `1px solid ${color?.focusBox}`,
    },
    hover: {
      background: onHoverBg || modeColors(mode).neutral200,
      border: "",
    },
  };
};

const getOutlineInputStyles = ({
  mode,
  hasError,
  variant,
  focusBorderColor,
  focusColor,
  outLineBorderColor,
  disabled,
  onHoverBg,
  backgroundColor,
}: InputType) => {
  const color = getColors(
    outLineBorderColor,
    focusBorderColor,
    focusColor,
    variant,
    hasError,
    mode
  );

  return {
    border: `1px solid ${color?.border}`,
    background: disabled
      ? modeColors(mode).neutral100
      : backgroundColor || "transparent",
    color: mode === "dark" ? "#fff" : "#333",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "",

    focus: {
      boxShadow: `0 0 0 2px ${color?.focusBox}`,
      border: `1px solid ${color?.focusBorder}`,
      background: "transparent",
    },
    hover: {
      border: !disabled && `1px solid ${modeColors(mode).outline}`,
      background: onHoverBg || "transparent",
    },
  };
};

const getGhostInputStyles = ({
  mode,
  hasError,
  variant,
  focusBorderColor,
  focusColor,
  outLineBorderColor,
  disabled,
  onHoverBg,
  backgroundColor,
}: InputType) => {
  const color = getColors(
    outLineBorderColor,
    focusBorderColor,
    focusColor,
    variant,
    hasError,
    mode
  );

  return {
    border: `1px solid ${color?.border}`,
    background: disabled
      ? modeColors(mode).ghost
      : backgroundColor || "transparent",
    color: mode === "dark" ? "#fff" : "#333",
    boxShadow: "",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    focus: {
      boxShadow: `0 0 0 2px ${color?.focusBox}`,
      background: focusBorderColor
        ? focusBorderColor
        : modeColors(mode).neutral100,
      border: `1px solid ${color?.focusBox}`,
    },
    hover: {
      background: onHoverBg || modeColors(mode).ghost,
      border: "",
    },
  };
};

// This function returns the appropriate input styles based on the input type and mode
const getInputStyles = ({
  mode,
  variant,
  focusBorderColor,
  focusColor,
  outLineBorderColor,
  disabled,
  hasError,
  Type,
  onHoverBg,
  backgroundColor,
}: InputType) => {
  switch (variant) {
    case "solid":
      return getSolidInputStyles({
        mode,
        disabled,
        hasError,
        variant,
        focusBorderColor,
        focusColor,
        outLineBorderColor,
        onHoverBg,
        backgroundColor,
        Type,
      });
    case "outline":
      return getOutlineInputStyles({
        mode,
        hasError,
        variant,
        focusBorderColor,
        focusColor,
        outLineBorderColor,
        disabled,
        onHoverBg,
        backgroundColor,
        Type,
      });
    case "ghost":
      return getGhostInputStyles({
        mode,
        hasError,
        variant,
        focusBorderColor,
        focusColor,
        outLineBorderColor,
        disabled,
        onHoverBg,
        backgroundColor,
        Type,
      });
    default:
      return getSolidInputStyles({
        mode,
        disabled,
        hasError,
        variant,
        focusBorderColor,
        focusColor,
        outLineBorderColor,
        onHoverBg,
        backgroundColor,
        Type,
      });
  }
};

// This function returns the appropriate input radius based on the radius type
const getInputRadius = (radius: string) => {
  switch (radius) {
    case "sm":
      return `6px`;
    case "md":
      return `8px`;
    case "lg":
      return `10px`;
    case "xl":
      return `12px`;
    case "full":
      return `9999px`;
    default:
      return "6px";
  }
};

export { getInputStyles, getInputRadius };
