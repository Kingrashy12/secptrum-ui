import styled from "styled-components";
import { colors } from "./colors";
import {
  getBorderRadius,
  getButtonStyles,
  getHoverStyle,
  getSizeVariant,
} from "../utils/func/button";
import { BoxType, ButtonProps, InputType } from "@/types";
import { getInputRadius, getInputVariantStyles } from "../utils/getPropsStyle";
import { spacingValues } from "../utils/spacing";

export const StyledBox = styled.div<{
  padding?: BoxType["padding"];
  margin?: BoxType["margin"];
  centered?: BoxType["centered"];
  paddingTop?: BoxType["paddingTop"];
  paddingBottom?: BoxType["paddingBottom"];
  paddingLeft?: BoxType["paddingLeft"];
  paddingRight?: BoxType["paddingRight"];
  border?: BoxType["border"];
  marginTop?: BoxType["marginTop"];
  marginBottom?: BoxType["marginBottom"];
  marginLeft?: BoxType["marginLeft"];
  marginRight?: BoxType["marginRight"];
}>`
  position: relative;
  display: flex;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  padding-left: ${(props) => spacingValues(props.paddingLeft)};
  padding-right: ${(props) => spacingValues(props.paddingRight)};
  padding-top: ${(props) => spacingValues(props.paddingRight)};
  padding-bottom: ${(props) => spacingValues(props.paddingBottom)};
  margin-top: ${(props) => spacingValues(props.marginTop)};
  margin-right: ${(props) => spacingValues(props.marginRight)};
  margin-left: ${(props) => spacingValues(props.marginLeft)};
  margin-bottom: ${(props) => spacingValues(props.marginBottom)};
  justify-content: ${(props) => props.centered && "center"};
  align-items: ${(props) => props.centered && "center"};
`;
export const FilePicker = styled(StyledBox)`
  border: 2px dashed ${colors.neutral500};
  border-radius: 8px;
  flex-direction: column;
  gap: 3px;
  padding: 6px;
  cursor: pointer;
  width: 100%;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 500;
    font-size: 15px;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
    color: ${colors.neutral500};
  }
`;

export const UploadIcon = styled(StyledBox)`
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 9999px;
  background: ${colors.green100};
  padding: 1px;
  margin-top: 2px;

  svg {
    color: ${colors.green500};
  }
`;
// Button styling
export const StyledButton = styled.button<{
  variant: ButtonProps["variant"];
  radius: ButtonProps["radius"];
  size: ButtonProps["size"];
}>`
  width: 100%;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: ${(props) => getSizeVariant(props.size)};
  border-radius: ${(props) => getBorderRadius(props.radius)};
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    ${(props) => getHoverStyle(props.variant)};
  }
  ${(props) => getButtonStyles(props.variant)};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  .loader {
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledInput = styled.div<{
  variant: InputType["variant"];
  radius: InputType["radius"];
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  gap: 6px;
  border-radius: ${(props) => getInputRadius(props.radius)};
  ${(props) => getInputVariantStyles(props.variant)};

  &:focus-within {
    outline-color: ${colors.blue500};
    border: 1.8px solid ${colors.blue500};
  }

  input {
    font-weight: 600;
    outline: none;
    width: 100%;
    border: none;
    background: transparent;
    caret-color: ${colors.blue500};
    color: black;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }
  input :focus {
    outline: none;
    border: none;
  }
  .eye_pass {
    cursor: pointer;
  }
`;

export const SelectedImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 9px;
  cursor: pointer;
  z-index: 0;
  border: 1px solid ${colors.neutral300};
`;

export const SelectedImageContainer = styled(StyledBox)`
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid ${colors.neutral300};
  background: white;
  width: 400px;
  height: auto;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const ExtraImagePicker = styled(StyledBox)`
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border: 2px dashed ${colors.neutral300};
  background: white;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
`;

export const Styled_Container = styled(StyledBox)`
  flex-direction: column;
  gap: 2px;
`;

export const ImageRemover = styled.div`
  position: absolute;
  background: black;
  z-index: 10;
  width: 30px;
  height: 30px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  &:hover {
    opacity: 0.75;
  }
`;
