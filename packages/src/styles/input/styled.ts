/* eslint-disable @typescript-eslint/no-explicit-any */

import { css, DivProps, keyframes, styled } from 'styled-chroma';
import { colors } from '../colors';
import { getInputRadius, getInputStyles } from '../../utils/input';
import { InputType } from '../../types/sui';
import {
  IStyleCheckbox,
  IStyleChecked,
  IStyleSwitch,
  IStyleSwitchHandle,
} from '../../types/istyle';

const pop = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

// **** input   s   t   y   l   e   s   **** //
export const InputForm = styled<DivProps & { width: string | any }>('div')`
  flex-direction: column;
  gap: 8px;
  min-width: ${(props) => props.width || 'auto'};
  max-width: 100%;
  display: flex;
  p {
    font-weight: 500;
    font-size: 14px;
    color: ${colors.red[500]};
    margin-left: 3px;
    font-family: inherit;
    animation: ${pop} 1s ease-in;
    display: flex;
    align-items: center;
    gap: 3px;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

interface IStyle extends InputType {
  variant: InputType['variant'];
  radius: InputType['radius'];
  outLineBorderColor: InputType['outLineBorderColor'];
  focusColor: InputType['focusColor'];
  focusBorderColor: InputType['focusBorderColor'];
  disabled: boolean | any;
  hasError: InputType['hasError'] | any;
  color: string | any;
  backgroundcolor: InputType['backgroundColor'];
  mode: InputType['mode'];
}

export const Input = styled<IStyle>('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  padding: 12px;
  gap: 6px;
  border-radius: ${(props) => getInputRadius(props.radius as any)};

  ${(props) =>
    props.disabled &&
    `
  pointer-event: none;
  cursor: default;
  `};
  ${(props) => {
    const styles = getInputStyles(props);
    return css`
      background: ${styles.background};
      border: ${styles.border};
      transition: ${styles.transition};
      box-shadow: ${styles.boxShadow};

      &:hover {
        border: ${styles.hover.border};
        background: ${styles.hover.background};
      }

      &:focus-within {
        border: ${styles.focus.border};
        background: ${styles.focus.background};
        box-shadow: ${styles.focus.boxShadow};
      }
    `;
  }};

  input {
    flex: 1;
    font-weight: 500;
    outline: none;
    border: none;
    background: transparent;
    caret-color: ${colors.blue[500]};
    color: ${(props) =>
      props.color || props.mode === 'light' ? 'black' : 'white'};
    font-family: inherit;
    transition: color 0.3s ease;
    height: 100%;

    &:focus {
      outline: none;
    }
  }
  .Icon__Sui {
    height: 100%;
  }

  .eye_pass {
    cursor: pointer;
    color: ${colors.neutral[400]};
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.neutral[600]};
    }
  }
`;
Input.displayName = 'TextInputSui';

//************Checkbox Components**************//
export const Checker = styled<IStyleCheckbox>('div')`
  background: none;
  border: ${(props) =>
    props.checked ? 'none' : `1.5px solid ${props.borderColor}`};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => (props.rounded ? `${props.size / 2}px` : '7px')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => props.disabled && 'none'};

  .sui-unchecked {
    opacity: 0;
  }
  .sui-checked {
    opacity: 1;
  }
`;
Checker.displayName = 'CheckboxSui';

export const Checked = styled<IStyleChecked>('div')`
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${(props) => props.color};
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.rounded ? `${props.size / 2}px` : '7px')};
  border: none;
`;

//***********Switch Components****************//
export const SwitchSui = styled<IStyleSwitch>('div')`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 9999px;
  padding: 2px;
  background-color: ${(props) =>
    props.checked ? props.checkedColor : props.color};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => props.disabled && 'none'};
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 0;
`;
SwitchSui.displayName = 'SwitchSui';

export const SwitchHandle = styled<IStyleSwitchHandle>('div')`
  width: ${(props) => props.switchWidth};
  height: ${(props) => props.height};
  background: white;
  border-radius: 9999px;
  position: absolute;
  ${(props) =>
    props.checked
      ? css`
          right: 3px;
        `
      : ''}
  ${(props) =>
    !props.checked
      ? css`
          left: 3px;
        `
      : ''}
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;
