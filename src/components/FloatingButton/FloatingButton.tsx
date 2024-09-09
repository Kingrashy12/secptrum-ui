import React from "react";
import { BoxProps } from "../../types";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { getFloatPosition, getToastPosition } from "../../utils/func/toast";

export interface FloatProps extends BoxProps {
  /**
   * The React element that will be positioned to float.
   */
  children: React.ReactElement;
  /**
   * The position of the float element, which defines where the element
   * should appear on the screen. It can be of type `ToastPositionType`.
   */
  position?: ToastPositionType | "bottom-center" | "top-center";
  backgroundColor?: string;
}

const FloatingButton = ({
  position = "bottom-right",
  children,
  backgroundColor,
  ...props
}: FloatProps) => {
  const Float = styled.div`
    position: fixed;
    width: auto;
    height: auto;
    background: ${backgroundColor ? backgroundColor : colors.blue500};
    padding: 16px;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${getFloatPosition(position)}
    filter: drop-shadow(2px 2px 2px ${colors.slate400});
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      opacity: 0.9;
    }
  `;
  return <Float {...props}>{children}</Float>;
};

export default FloatingButton;
