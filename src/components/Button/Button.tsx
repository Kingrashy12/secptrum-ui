import { colors } from "../../styles/colors";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { ComponentPropsWithRef } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

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
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  icon?: any;
  /**
   * @param isLoading A loading indicator used to signal a pending state action `e.g` Login
   */
  isLoading?: boolean;
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
 * `onClick`, `disabled`, `className`, and more.
 *
 * @component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button for more information on standard HTML button attributes.
 */

const Button = ({
  children,
  radius = "xl",
  variant = "solid",
  size = "md",
  icon,
  isLoading,
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
    gap: 5px;
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
    ${getButtonStyles(variant)};
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
  return (
    <StyledButton {...props}>
      {isLoading ? (
        <AiOutlineLoading3Quarters className="loader" />
      ) : (
        icon && <Icon icon={icon} />
      )}{" "}
      {children}
    </StyledButton>
  );
};

export default Button;
