/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, styled } from 'styled-chroma';
import { spin, zoom } from '../animations';

import { ButtonProps } from '../../types/sui';
import {
  getButtonRadius,
  getButtonStyles,
  getHoverStyle,
  getSizeVariant,
} from '../../utils/button';
import { colors } from '../colors';
import { getFloatPosition } from '../../utils/position';
import { getFloatSize, getFloatVariantStyle } from '../../utils/actions';
import { IStyleFab } from '../../types/istyle';

//************Button Components***************//
export const ButtonSui = styled<ButtonProps>('button')`
  width: ${(props) => props.width as any};
  border: none;
  cursor: pointer;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => getButtonStyles(props)?.color as any};
  filter: ${(props) => getButtonStyles(props)?.filter as any};
  padding: ${(props) => getSizeVariant(props.size) as any};
  border-radius: ${(props) => getButtonRadius(props.radius) as any};
  background: ${(props) => getButtonStyles(props)?.background as any};
  border: ${(props) => getButtonStyles(props)?.border as any};

  &:hover {
    background: ${(props) => getHoverStyle(props)?.background as any};
  }

  ${(props) =>
    props.disabled
      ? `
      cursor: not-allowed;
      opacity: 0.75;
      pointer-events: none;
    `
      : ''}

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  .loader {
    animation: ${spin} 1.1s infinite linear;
  }
`;
ButtonSui.displayName = 'ButtonSui';

//***********Fab Components***************//
export const FabSui = styled<IStyleFab>('div')`
  position: ${(props) => (props.moveOnScroll ? 'absolute' : 'fixed')};
  width: auto;
  height: auto;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: ${(props) => props.zIndex || 400};
  ${(props) => {
    const position = getFloatPosition(props.position);
    return css`
      top: ${position?.top};
      left: ${position?.left};
      bottom: ${position?.bottom};
      right: ${position?.right};
    `;
  }};
  ${(props) => {
    const size = getFloatSize(props.size);
    return css`
      padding: ${size?.padding};
    `;
  }};
  ${(props) => {
    const variant = getFloatVariantStyle(props.variant, props.colorScheme);
    return css`
      border: ${variant?.border};
      background: ${variant?.background};
      color: ${variant?.color};
    `;
  }};

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
  animation: ${zoom} 0.5s linear;

  &:hover {
    opacity: 0.9;
  }
`;
FabSui.displayName = 'FabSui';
