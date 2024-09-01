import React, { ComponentPropsWithRef } from "react";

type InputProps = ComponentPropsWithRef<"input">;
type BoxProps = ComponentPropsWithRef<"div">;

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
  Type: "password" | "text" | "email" | "file";
}

declare interface BoxType extends BoxProps {
  children: React.ReactNode;
}
