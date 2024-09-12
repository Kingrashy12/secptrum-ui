// export * from "./fun";
import React, { ComponentPropsWithRef } from "react";

type InputProps = ComponentPropsWithRef<"input">;
type BoxProps = ComponentPropsWithRef<"div">;
type ButtonTypes = ComponentPropsWithRef<"button">;

declare interface ButtonProps extends ButtonTypes {
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

declare interface InputType extends InputProps {
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  icon?: any;
  /**
   * @param variant Indicates the style which the Input Components will inherits to, default `solid`
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
  Type: "password" | "text" | "email";
  iconSize?: number;
}

declare interface BoxType extends BoxProps {
  children: React.ReactNode;
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
}

declare interface CardType extends BoxProps {
  children: React.ReactNode;
  /**
   * An indication to center card content
   */
  centerContent?: boolean;
}
