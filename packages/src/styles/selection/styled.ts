/* eslint-disable @typescript-eslint/no-explicit-any */
import { colors, styled } from 'styled-chroma';
import { walkIn } from '../animations';

//******* Menu Component *********//
export const MenuPanel = styled<{ open?: boolean; zIndex: number }>('div')`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  width: 100%;
  position: fixed;
  height: auto;
  z-index: ${({ zIndex }) => zIndex || 100};
`;

type IStyledMenu = {
  mode: 'light' | 'dark';
  zIndex: number;
  top: number | any;
  left: number | any;
  right: number | any;
  bottom: number | any;
};

export const MenuSui = styled<IStyledMenu>('div')`
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
      mode === 'light' ? colors.neutral[200] : colors.neutral[800]};
  background: ${({ mode }) => (mode === 'light' ? 'white' : 'black')};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  z-index: ${({ zIndex }) => zIndex || 100};
  transition: all 0.3s ease-in-out;
  animation: ${walkIn} 0.3s ease-in-out;
`;
MenuSui.displayName = 'MenuSui';

export const MenuItemSui = styled<{
  space?: number;
  color?: string;
  mode: 'light' | 'dark';
}>('div')`
  display: flex;
  align-items: center;
  gap: ${({ space }) => (space ? `${space}rem` : '0.25rem')};
  padding: 0.625rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${({ color, mode }) =>
    color || (mode === 'light' ? colors.neutral[900] : colors.neutral[50])};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  &:hover {
    background: ${({ mode }) =>
      mode === 'light' ? colors.gray[100] : colors.neutral[800]};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    font-family: inherit;
    user-select: none;
  }
`;
MenuItemSui.displayName = 'MenuItemSui';
