import { getFloatPosition } from "../../utils/position";
import { getFloatSize, getFloatVariantStyle } from "../../utils/variant";
import React, { ComponentPropsWithRef } from "react";
import styled from "styled-components";
import { ToastPositionType } from "../Toast/Toast";
import shouldForwardProp from "../../utils/is-prop-valid";
import { colors } from "../../styles/colors";

type BoxProps = ComponentPropsWithRef<"div">;

export interface FloatProps extends BoxProps {
  /**
   * The React element that will be positioned to float.
   */
  children?: React.ReactNode;
  /**
   * The position of the float element, which defines where the element
   * should appear on the screen. It can be of type `ToastPositionType`.
   */
  position?: ToastPositionType | "bottom-center" | "top-center";
  backgroundColor?: string;
  size?: "md" | "lg" | "xl";
  disabled?: boolean;
  variant?: "solid" | "light";
  colorScheme?: "primary" | "secondary" | "danger";
  moveOnScroll?: boolean;
}

const FloatingActionButton = ({
  position = "bottom-right",
  children,
  backgroundColor,
  size = "md",
  disabled,
  colorScheme = "primary",
  variant = "solid",
  moveOnScroll,
  ...props
}: FloatProps) => {
  return (
    <Fab
      {...props}
      className={props.className}
      backgroundcolor={backgroundColor}
      position={position}
      colorScheme={colorScheme}
      disabled={disabled}
      variant={variant}
      size={size}
      moveOnScroll={moveOnScroll}
    >
      {children}
    </Fab>
  );
};

export default FloatingActionButton;

const Fab = styled.div.withConfig({ shouldForwardProp })<{
  backgroundcolor: string | any;
  position: FloatProps["position"];
  disabled: boolean | any;
  colorScheme: FloatProps["colorScheme"];
  variant: FloatProps["variant"];
  size: FloatProps["size"];
  moveOnScroll: FloatProps["moveOnScroll"];
}>`
  position: ${(props) => (props.moveOnScroll ? "absolute" : "fixed")};
  width: auto;
  height: auto;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${(props) => getFloatPosition(props.position)};
  ${(props) => getFloatSize(props.size)};
  ${(props) =>
    getFloatVariantStyle(
      props.variant,
      props.colorScheme,
      props.backgroundcolor
    )};

  ${(props) =>
    props.disabled &&
    `
     cursor: not-allowed;
    opacity: 0.75;
    pointer-events: none;
    background: ${colors.gray[400]};
  `};

  transform: translateZ(0);
  will-change: transform;
  animation: zoom 0.5s linear;

  @keyframes zoom {
    from {
      transform: scale(0.1);
    }
    to {
      transform: scale(1);
    }
  }

  &:hover {
    opacity: 0.9;
  }
`;
