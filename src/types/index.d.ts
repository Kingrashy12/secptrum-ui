import React, { ComponentProps } from "react";
import { SizeVariantType } from "./fun";

type InputProps = ComponentProps<"input">;
type BoxProps = ComponentProps<"div">;
type ButtonTypes = ComponentProps<"button">;

declare interface ButtonProps extends ButtonTypes {
  children: string;
  /**
   * Defines the styling variants for the `Button`.
   * @property {string} solid - A solid button style with no additional classes.
   * @property {string} danger - A button style with a border and transition effects, indicating a danger or alert action.
   * @property {string} outline - A button style with a border outline.
   * @property {string} ghost - A button style with a transparent background and transition effects.
   */
  variant?: "solid" | "outline" | "ghost" | "light" | "danger";
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
  /**
   * Position of the icon inside the button, either on the `left` or `right` side.
   * @default 'left'
   */
  iconPosition?: "left" | "right";

  /**
   * The color of the button's text or icon.
   * @example "#ffffff" | "blue"
   */
  color?: string;

  /**
   * The background color of the button in its default state.
   * @example "#000000" | "red"
   */
  backgroundColor?: string;

  /**
   * The background color of the button when hovered in the solid style.
   * @example "#333333" | "green"
   */
  onHoverBackgroundSolid?: string;

  /**
   * The background color of the button when hovered in the outline style.
   * @example "#444444" | "yellow"
   */
  onHoverBackgroundOutline?: string;

  /**
   * The background color of the button when hovered in the light style.
   * @example "#555555" | "purple"
   */
  onHoverBackgroundLight?: string;

  /**
   * The background color of the button when hovered in the ghost style.
   * @example "#666666" | "cyan"
   */
  onHoverBackgroundGhost?: string;

  /**
   * The border style for the button when in outline mode.
   * @default "#000000"
   */
  outlineBorderColor?: string;
  /**
   * Specifies the width of the button. If provided, it sets the button’s width
   * to the specified value. If not provided, the button will use the default width of `auto`
   */
  width?: string;
  iconSize?: number;
  /**
   * Sets the theme mode for the input component.
   *
   * Options:
   * - `light` (default)
   * - `dark`
   * - Custom theme mode (override default styles)
   *
   * Allows developers to integrate with apps that support light/dark modes or provide a custom design.
   * @type {"light" | "dark"}
   */
  mode?: "dark" | "light";
  /**
   * If true, the button will take up the full width of its container.
   * @default false
   * @type {boolean}
   */
  fullWidth?: boolean;
}

declare interface InputType extends InputProps {
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  icon?: any;
  /**
   * @param variant Indicates the style which the Input Components will inherits to, default `outline`
   */
  variant?: "solid" | "outline" | "ghost";
  /**
   * @param radius Defines the border-radius size of the input, determining how rounded the corners will be.
   * Available options: "sm" (small), "md" (medium), "lg" (large), "xl" (extra large), or "full" (completely rounded).
   */
  radius?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * @param Type Specifies the type of input to render. Determines the kind of data that the input will handle.
   * Possible values: "password" (for password input), "text" (for generic text), "email" (for email addresses), or "file" (for file uploads).
   */
  Type: "password" | "text" | "email" | "number";
  /**
   * The size of the icon.
   *
   * @type {number}
   * @optional
   */
  iconSize?: number;
  /**
   * The color of the outline border.
   *
   * @type {string}
   * @optional
   */
  outLineBorderColor?: string;
  /**
   * The color of the input when focused.
   *
   * @type {string}
   * @optional
   */
  focusColor?: string;
  /**
   * The color of the border when the input is focused.
   *
   * @type {string}
   * @optional
   */
  focusBorderColor?: string;
  /**
   * Indicates if the input is in an error state.
   *
   * @type {boolean}
   * @optional
   */
  hasError?: boolean | any;
  /**
   * The error message to display when the input is in an error state.
   *
   * @type {string}
   * @optional
   */
  errorMessage?: string;
  /**
   * Defines whether the input has a label.
   * @type {string}
   */
  hasLabel?: string;

  /**
   * The label text to display for the input field.
   * @type {string}
   */
  label?: string;

  /**
   * Specifies the width of the input, e.g., '100%' or '250px'.
   * @type {string}
   */
  width?: string;

  /**
   * Sets the theme mode for the input component.
   *
   * Options:
   * - `light` (default)
   * - `dark`
   * - Custom theme mode (override default styles)
   *
   * Allows developers to integrate with apps that support light/dark modes or provide a custom design.
   * @type {"light" | "dark"}
   */
  mode?: "light" | "dark";

  /**
   * Additional class name to apply to the form container element.
   * @type {string}
   */
  formClassName?: string;

  /**
   * Inline styles to apply to the form container.
   * @type {React.CSSProperties}
   */
  formStyle?: React.CSSProperties;

  /**
   * Inline styles to apply to the input element.
   * @type {React.CSSProperties}
   */
  inputStyle?: React.CSSProperties;

  /**
   * Additional class name to apply to the input element.
   * @type {string}
   */
  inputClass?: string;

  /**
   * The text color for the input field.
   * @type {string}
   */
  color?: string;

  /**
   * The background color for the input field.
   * @type {string}
   */
  backgroundColor?: string;

  /**
   * Override the default hover background color for the 'solid' variant.
   * @type {string}
   * @default inherited from theme
   */
  solidVariantHoverColor?: string;

  /**
   * Override the default hover background color for the 'ghost' variant.
   * @type {string}
   * @default inherited from theme
   */
  ghostVariantHoverColor?: string;
  /**
   * If true, the button will take up the full width of its container.
   * @default false
   * @type {boolean}
   */
  fullWidth?: boolean;
}

declare interface BoxType extends BoxProps {
  children?: React.ReactNode;
  padding?: string;
  paddingTop?: SizeVariantType;
  paddingBottom?: SizeVariantType;
  paddingLeft?: SizeVariantType;
  paddingRight?: SizeVariantType;
  border?: string;
  margin?: string;
  marginTop?: SizeVariantType;
  marginBottom?: SizeVariantType;
  marginLeft?: SizeVariantType;
  marginRight?: SizeVariantType;
  centered?: boolean;
  direction?: "row" | "column";
  /**
   * Enables wrapping for items if they exceed the available space in a row layout.
   */
  wrap?: boolean;
  /**
   * Controls the spacing (gap) between child elements within the Stack component.
   * Accepts predefined sizes: "sm" (small), "md" (medium), "lg" (large), "xl" (extra-large), "2xl" (2 times extra-large), "3xl" (3 times extra-large).
   */
  spacing?: SizeVariantType;
}
