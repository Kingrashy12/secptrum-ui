import { colors } from "../../styles/colors";
import { FloatProps } from "../../types/sui";

const floatColor = {
  primary: {
    light: {
      border: `1px solid ${colors.blue[500]}`,
      background: colors.blue[200],
      color: colors.blue[500],
    },
    solid: {
      border: "none",
      background: colors.blue[500],
      color: "white",
    },
  },
  secondary: {
    light: {
      border: `1px solid ${colors.slate[500]}`,
      background: colors.slate[200],
      color: colors.slate[500],
    },
    solid: {
      border: "none",
      background: colors.slate[500],
      color: "white",
    },
  },
  danger: {
    light: {
      border: `1px solid ${colors.red[500]}`,
      background: colors.red[200],
      color: colors.red[500],
    },
    solid: {
      border: "none",
      background: colors.red[500],
      color: "white",
    },
  },
};

const getColor = (
  colorScheme: FloatProps["colorScheme"],
  variant: FloatProps["variant"]
) => {
  if (variant === "light") {
    return floatColor[colorScheme || "secondary"].light;
  } else if (variant === "solid") {
    return floatColor[colorScheme || "secondary"].solid;
  }
};

const getFloatVariantStyle = (
  variant: FloatProps["variant"],
  colorScheme: FloatProps["colorScheme"]
  // backgroundColor: string
) => {
  return getColor(colorScheme, variant);
};

const getFloatSize = (size: FloatProps["size"]) => {
  switch (size) {
    case "md":
      return { padding: `8px` };
    case "lg":
      return { padding: `12px` };
    case "xl":
      return { padding: `16px` };
  }
};

export { getFloatVariantStyle, getFloatSize };
