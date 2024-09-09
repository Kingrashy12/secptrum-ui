import React, { useState } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import { colors } from "../../styles/colors";

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
  checked = false,
}: SwitchType) => {
  const { width, height } = getSize(variant);
  const { width: switchWidth } = getSwitchSize(variant);

  const SwitchContainer = styled(Box)`
    width: ${width};
    height: ${height};
    border-radius: 9999px;
    padding: 2px;
    border: 1px solid ${colors.neutral200};
    background-color: ${checked ? checkedColor : color};
    cursor: pointer;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  `;

  const SwitchHandle = styled.div`
    width: ${switchWidth};
    height: ${height};
    background: white;
    border-radius: 9999px;
    position: absolute;
    right: ${checked && `2px`};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  `;

  return (
    <SwitchContainer onClick={onSwitch}>
      <SwitchHandle />
    </SwitchContainer>
  );
};

export default Switch;
