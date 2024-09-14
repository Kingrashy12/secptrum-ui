import React, { useState } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import { colors } from "../../styles/colors";
import shouldForwardProp from "../../utils/is-prop-valid";

type SwitchType = {
  /**
   * The background color of the switch when it is not checked.
   * @default colors.neutral300
   */
  color?: string;

  /**
   * The background color of the switch when it is checked.
   * @default "blue"
   */
  checkedColor?: string;

  /**
   * The size variant of the switch, which determines its width and height.
   * Can be either "md" (medium) or "lg" (large).
   * @default "md"
   */
  variant?: "md" | "lg";
  /**
   * Callback function triggered when the switch is toggled.
   */
  onSwitch: () => void;

  /**
   * Indicates whether the switch is currently checked (on) or not (off).
   * @default false
   */
  checked?: boolean;
  className?: string;
};

const getSize = (variant: SwitchType["variant"]) => {
  switch (variant) {
    case "md":
      return { width: `35px`, height: `15px` };
    case "lg":
      return { width: `42px`, height: `22px` };
    default:
      return { width: `35px`, height: `15px` };
  }
};
const getSwitchSize = (variant: SwitchType["variant"]) => {
  switch (variant) {
    case "md":
      return { width: `15px`, height: `15px` };
    case "lg":
      return { width: `22px`, height: `22px` };
    default:
      return { width: `15px`, height: `15px` };
  }
};

const Switch = ({
  color = colors.neutral300,
  checkedColor = "blue",
  variant = "md",
  onSwitch,
  className,
  checked = false,
}: SwitchType) => {
  const { width, height } = getSize(variant);
  const { width: switchWidth } = getSwitchSize(variant);

  return (
    <SwitchContainer
      width={width}
      height={height}
      checked={checked}
      checkedColor={checkedColor}
      color={color}
      onClick={onSwitch}
      className={className}
    >
      <SwitchHandle
        height={height}
        switchWidth={switchWidth}
        checked={checked}
      />
    </SwitchContainer>
  );
};

export default Switch;

const SwitchContainer = styled(Box).withConfig({ shouldForwardProp })<{
  width: string;
  height: string;
  checked: boolean;
  checkedColor: string;
  color: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 9999px;
  padding: 2px;
  border: 1px solid ${colors.neutral200};
  background-color: ${(props) =>
    props.checked ? props.checkedColor : props.color};
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;

const SwitchHandle = styled.div.withConfig({ shouldForwardProp })<{
  height: string;
  checked: boolean;
  switchWidth: string;
}>`
  width: ${(props) => props.switchWidth};
  height: ${(props) => props.height};
  background: white;
  border-radius: 9999px;
  position: absolute;
  right: ${(props) => props.checked && `2px`};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;
