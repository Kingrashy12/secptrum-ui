/* eslint-disable @typescript-eslint/no-explicit-any */
import { colors, styled } from "styled-chroma";
import { walkIn } from "../animations";

type IStyledMenuPanel = {
  open?: boolean;
  zIndex: number;
  top: number | any;
  left: number | any;
  right: number | any;
};

//******* Menu Component *********//
export const MenuPanel = styled<IStyledMenuPanel>("div")`
  display: ${({ open }) => (open ? "flex" : "none")};
  width: 100%;
  position: absolute;
  height: auto;
  z-index: ${({ zIndex }) => zIndex || 100};
  ${({ top }) => top && `top: ${top}px`};
  ${({ left }) => left && `left: ${left}px`};
  ${({ right }) => right && `right: ${right}px`};
`;
MenuPanel.displayName = "MenuPanel";

type IStyledMenu = {
  mode: "light" | "dark";
  zIndex: number;
  top: number | any;
  left: number | any;
  right: number | any;
  bottom: number | any;
};

export const MenuSui = styled<IStyledMenu>("div")`
  position: absolute;
  ${({ top }) => top && `top: ${top}px`};
  ${({ left }) => left && `left: ${left}px`};
  ${({ right }) => right && `right: ${right}px`};
  ${({ bottom }) => bottom && `bottom: ${bottom}px`};
  width: auto;
  max-width: 20rem;
  height: auto;
  padding: 0.5rem;
  border-radius: 0.9rem;
  border: 1.5px solid
    ${({ mode }) =>
      mode === "light" ? colors.neutral[200] : colors.neutral[800]};
  background: ${({ mode }) => (mode === "light" ? "white" : "black")};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  z-index: ${({ zIndex }) => zIndex || 100};
  transition: all 0.3s ease-in-out;
  animation: ${walkIn} 0.3s ease-in-out;
`;
MenuSui.displayName = "MenuSui";

type IStyleMenuItem = {
  space?: number;
  color?: string;
  mode: "light" | "dark";
  disabled?: boolean;
};

export const MenuItemSui = styled<IStyleMenuItem>("div")`
  display: flex;
  align-items: center;
  gap: ${({ space }) => (space ? `${space}px` : "0.25rem")};
  padding: 0.625rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${({ color, mode }) =>
    color || (mode === "light" ? colors.neutral[900] : colors.neutral[50])};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  &:hover {
    background: ${({ mode }) =>
      mode === "light" ? colors.gray[100] : colors.neutral[800]};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    font-family: inherit;
    user-select: none;
  }

  ${(props) =>
    props.disabled
      ? `
      cursor: not-allowed;
      opacity: 0.75;
      pointer-events: none;
    `
      : "cursor: pointer;"}
`;
MenuItemSui.displayName = "MenuItemSui";
