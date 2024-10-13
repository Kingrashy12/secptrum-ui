import React from "react";
import { colors } from "../../styles/colors";
import Icon from "./Icon";
import { css, DivProps, styled } from "styled-chroma";

type IconTypes = {
  icon: React.ElementType;
  size?: number;
  backgroundColor?: string;
  mode?: "light" | "dark";
  radius?: number;
};

/**
 * HoverableIcon Component
 *
 * A customizable icon component that changes appearance on hover.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ElementType} props.icon - The icon to be displayed
 * @param {number} [props.size] - The size of the icon
 * @param {string} [props.backgroundColor] - Custom background color for the icon
 * @param {"light" | "dark"} [props.mode="light"] - The color mode of the icon
 * @param {number} [props.radius=6] - The border radius of the icon container
 *
 * @example
 * <HoverableIcon icon={IoClose} size={20} mode="dark" />
 */

const HoverableIcon = ({
  icon,
  size,
  mode,
  backgroundColor,
  radius,
}: IconTypes) => {
  return (
    <HoverIcon
      backgroundColor={backgroundColor}
      mode={mode}
      radius={radius || 6}
    >
      <Icon icon={icon} size={size} />
    </HoverIcon>
  );
};

export default HoverableIcon;

const Istyle = (
  mode: IconTypes["mode"],
  background: IconTypes["backgroundColor"]
) => {
  return {
    background:
      background || mode === "dark" ? colors.gray[700] : colors.gray[100],
    hover: mode === "dark" ? colors.gray[800] : colors.gray[200],
  };
};

interface IStyleIcon extends DivProps {
  backgroundColor: IconTypes["backgroundColor"];
  mode: IconTypes["mode"];
  radius: number;
}

const HoverIcon = styled<IStyleIcon>("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: ${(props) => props.radius}px;
  cursor: pointer;
  ${(props) => {
    const bg = Istyle(props.mode, props.backgroundColor);
    return css`
      background: ${bg.background};
      &:hover {
        background: ${bg.hover};
      }
    `;
  }}
  transition: background-color 0.2s ease;
`;
HoverIcon.displayName = "HoverIconSui";
