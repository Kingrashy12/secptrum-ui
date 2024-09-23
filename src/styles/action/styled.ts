import { ButtonProps } from "@/components/test/Button";
import {
  getBorderRadius,
  getButtonStyles,
  getHoverStyle,
  getSizeVariant,
} from "@/utils/test/variant";
import { shouldForwardProps } from "secptrum-ui";
import styled from "styled-components";
const shouldForwardProp = shouldForwardProps;

//**************Button Component************//
export const Button = styled.button.withConfig({
  shouldForwardProp,
})<{
  variant: ButtonProps["variant"];
  radius: ButtonProps["radius"];
  size: ButtonProps["size"];
  outlinebordercolor: ButtonProps["outlineBorderColor"];
  backgroundcolor: ButtonProps["backgroundColor"];
  onHoverBackgroundSolid: ButtonProps["onHoverBackgroundSolid"];
  onHoverBackgroundOutline: ButtonProps["onHoverBackgroundOutline"];
  onHoverBackgroundGhost: ButtonProps["onHoverBackgroundGhost"];
  onHoverBackgroundLight: ButtonProps["onHoverBackgroundLight"];
  width: ButtonProps["width"];
  mode: ButtonProps["mode"];
}>`
  max-width: 100%;
  width: ${(props) => props.width || "auto"};
  font-weight: 500;
  border: none;
  cursor: pointer;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: ${(props) => getSizeVariant(props.size)};
  border-radius: ${(props) => getBorderRadius(props.radius)};
  font-family: "Poppins-Medium", sans-serif;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed;
      opacity: 0.75;
      pointer-events: none;
    `}
  &:hover {
    ${(props) =>
      getHoverStyle(
        props.variant,
        props.onHoverBackgroundSolid,
        props.onHoverBackgroundOutline,
        props.onHoverBackgroundGhost,
        props.onHoverBackgroundLight,
        props.mode
      )};
  }
  ${(props) =>
    getButtonStyles(
      props.variant,
      props.color,
      props.outlinebordercolor,
      props.backgroundcolor
    )};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  .loader {
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
