import { colors } from "../../styles/colors";
import React from "react";

import { ComponentPropsWithRef } from "react";
import styled from "styled-components";

type ButtonTypes = ComponentPropsWithRef<"button">;

interface ButtonProps extends ButtonTypes {
  children: string;
  /**
   * Defines the styling variants for the `Button`.
   * @property {string} solid - A solid button style with no additional classes.
   * @property {string} danger - A button style with a border and transition effects, indicating a danger or alert action.
   * @property {string} outline - A button style with a border outline.
   * @property {string} ghost - A button style with a transparent background and transition effects.
   */
  variant?: "solid" | "outline" | "ghost";
  /**
   * Defines the border radius options for the `Button`.
   * @property {string} sm - A small border radius.
   * @property {string} md - A medium border radius.
   * @property {string} lg - A large border radius.
   * @property {string} xl - An extra-large border radius.
   * @property {string} full - A fully rounded border (circular).
   */

  radius?: "md" | "lg" | "xl" | "full";
  /**
   * Defines the size variants for the `Button`.
   * @property {string} md - A medium button size with standard padding and text.
   * @property {string} lg - A large button size with larger padding and text.
   * @property {string} xl - A extra large button size with larger padding and text.
   */
  size?: "md" | "lg" | "xl";
}

const getBorderRadius = (radius: ButtonProps["radius"]) => {
  switch (radius) {
    case "md":
      return `4px`;
    case "lg":
      return `6px`;
    case "xl":
      return `12px`;
    case "full":
      return `9999px`;
  }
};

const getSizeVariant = (size: ButtonProps["size"]) => {
  switch (size) {
    case "md":
      return `8px`;
    case "lg":
      return `12px`;
    case "xl":
      return `16px`;
  }
};

const getHoverStyle = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "solid":
      return `
      background: ${colors.blue600}
      `;
    case "ghost":
      return `
         background: ${colors.blue100}
      `;
    case "outline":
      return `
         background: ${colors.blue100}
      `;
  }
};

const getButtonStyles = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "solid":
      return `
      background: ${colors.blue500};
      color: white;
      `;
    case "ghost":
      return `
        color: ${colors.blue500};
        background: transparent;
      `;
    case "outline":
      return `
        background:transparent;
        border: 2px solid ${colors.blue500};
        color: ${colors.blue500};
      `;
  }
};

/**
 * A React component that extends the HTML `<button>` element to provide additional styling and functionality.
 *
 * The `Button` component can be customized using standard HTML button attributes and additional props like `size`.
 * It supports the `children` prop to display content inside the button and can accept other props such as
 * `onClick`, `disabled`, `className`, and more.
 *
 * @component
 * @param {Object} props - The props for the Button component.
 * @param {string} props.radius - The radius style of the button default `xl`.
 * @param {('md' | 'lg' | 'xl')} [props.size='medium'] - The size of the button default `md`.
 * @param {string} [props.variant] - The variant style of the button default `solid`.
 * @param {string} [props.className] - Additional class names to apply to the button for styling.
 * @param {function} [props.onClick] - The function to call when the button is clicked.
 * @returns {JSX.Element} A customizable button component that supports standard button props.
 *
 * @example
 * // Usage in a React component
 * import {Button} from 'secptrum-ui';
 *
 * function App() {
 *   return (
 *     <Button size="lg" variant='outlined' >
 *       Click Me!
 *     </Button>
 *   );
 * }
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button for more information on standard HTML button attributes.
 */

const Button = ({
  children,
  radius = "xl",
  variant = "solid",
  size = "md",
  ...props
}: ButtonProps): JSX.Element => {
  const StyledButton = styled.button`
    width: 100%;
    font-weight: 600;
    border: none;
    cursor: pointer;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: ${getSizeVariant(size)};
    border-radius: ${getBorderRadius(radius)};
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      ${getHoverStyle(variant)}
    }
    ${getButtonStyles(variant)}
  `;
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
