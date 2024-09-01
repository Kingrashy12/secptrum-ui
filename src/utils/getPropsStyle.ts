import { colors } from "../styles/colors";
import { InputType } from "@/types";

export const getInputVariantStyles = (variant: InputType["variant"]) => {
  switch (variant) {
    case "solid":
      return `
            outline: none;
            border: none;
            background: ${colors.neutral100};
            `;
    case "outline":
      return `
            border: 1px solid ${colors.neutral400};
            background: ${colors.neutral100};
            `;
    case "ghost":
      return `
            background: transparent;
            border: none;
            outline:none;
            `;
  }
};

export const getInputRadius = (radius: InputType["radius"]) => {
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
  }
};
