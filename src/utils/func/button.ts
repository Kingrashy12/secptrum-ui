import { colors } from "../../styles/colors";
import { ButtonProps } from "../../types";

const getBorderRadius = (radius: ButtonProps["radius"]) => {
  switch (radius) {
    case "md":
      return `4px`;
    case "lg":
      return `6px`;
    case "xl":
      return `12px`;
    case "full":
      return `9999px`;
  }
};

const getSizeVariant = (size: ButtonProps["size"]) => {
  switch (size) {
    case "md":
      return `8px`;
    case "lg":
      return `12px`;
    case "xl":
      return `16px`;
  }
};

const getHoverStyle = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "solid":
      return `
        background: ${colors.blue600}
        `;
    case "ghost":
      return `
           background: ${colors.blue100}
        `;
    case "outline":
      return `
           background: ${colors.blue100}
        `;
  }
};

const getButtonStyles = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "solid":
      return `
        background: ${colors.blue500};
        color: white;
        `;
    case "ghost":
      return `
          color: ${colors.blue500};
          background: transparent;
        `;
    case "outline":
      return `
          background:transparent;
          border: 2px solid ${colors.blue500};
          color: ${colors.blue500};
        `;
  }
};

export { getBorderRadius, getButtonStyles, getSizeVariant, getHoverStyle };
