import { InputType } from "../../types";
import { getInputRadius, getInputVariantStyles } from "../../utils/input";
import styled from "styled-components";
import Box from "../../components/Box/Box";
import { colors } from "../colors";
import shouldForwardProps from "../../utils/is-prop-valid";
import { getClassName } from "../../utils/helper/secptrum";

const shouldForwardProp = shouldForwardProps;

// Input style
export const InputForm = styled(Box)<{ width: string | any }>`
  flex-direction: column;
  gap: 8px;
  min-width: ${(props) => props.width || "auto"};
  max-width: 100%;
  p {
    font-weight: 500;
    font-size: 14px;
    color: ${colors.red[500]};
    margin-left: 3px;
    font-family: inherit;
    animation: pop 1s ease-in;
  }

  @keyframes pop {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

InputForm.defaultProps = {
  className: getClassName(InputForm),
};

export const Input = styled.div.withConfig({
  shouldForwardProp,
})<{
  variant: InputType["variant"];
  radius: InputType["radius"];
  outlinebordercolor: string | any;
  focusColor: InputType["focusColor"];
  focusBorderColor: InputType["focusBorderColor"];
  disabled: boolean | any;
  error: InputType["hasError"] | any;
  color: string | any;
  backgroundcolor: InputType["backgroundColor"];
  mode: InputType["mode"];
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  padding: 12px;
  gap: 6px;
  border-radius: ${(props) => getInputRadius(props.radius)};

  ${(props) =>
    props.disabled &&
    `
  pointer-event: none;
  cursor: default;
  `};
  ${(props) =>
    getInputVariantStyles(
      props.variant,
      props.outlinebordercolor,
      props.focusBorderColor,
      props.focusColor,
      props.disabled,
      props.error,
      props.mode
    )};

  input {
    flex: 1;
    font-weight: 500;
    outline: none;
    border: none;
    background: transparent;
    caret-color: ${colors.blue[500]};
    color: ${(props) =>
      props.color || props.mode === "light" ? "black" : "white"};
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

Input.defaultProps = {
  className: getClassName(Input),
};

//***********Switch Components****************//
export const Switch = styled(Box).withConfig({ shouldForwardProp })<{
  width: string;
  height: string;
  checked: boolean;
  checkedColor: string;
  color: string;
  disabled: boolean | any;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 9999px;
  padding: 2px;
  background-color: ${(props) =>
    props.checked ? props.checkedColor : props.color};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => props.disabled && "none"};
  display: flex;
  align-items: center;
`;

export const SwitchHandle = styled.div.withConfig({ shouldForwardProp })<{
  height: string;
  checked: boolean;
  switchWidth: string;
}>`
  width: ${(props) => props.switchWidth};
  height: ${(props) => props.height};
  background: white;
  border-radius: 9999px;
  position: absolute;
  right: ${(props) => props.checked && `3px`};
  left: ${(props) => !props.checked && `3px`};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;

//************Checkbox Components**************//
// Extend shouldForwardProps to include - size, rounded ad disabled
export const CheckBox = styled.div.withConfig({ shouldForwardProp })<{
  rounded: boolean | any;
  size: number;
  disabled: boolean | any;
  borderColor: string | any;
  checked: boolean;
}>`
  background: none;
  border: ${(props) =>
    props.checked ? "none" : `1.5px solid ${props.borderColor}`};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => (props.rounded ? `${props.size / 2}px` : "7px")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => props.disabled && "none"};
`;

CheckBox.defaultProps = {
  className: getClassName(CheckBox),
};

// Extend shouldForwardProps to include - color and rounded
export const Checked = styled(Box).withConfig({ shouldForwardProp })<{
  color: string;
  rounded: boolean | any;
  size: number;
}>`
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.rounded ? `${props.size / 2}px` : "7px")};
  border: none;
`;
