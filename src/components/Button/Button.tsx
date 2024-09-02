import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Icon from "../Icon/Icon";
import { ButtonProps } from "@/types";
import { StyledButton } from "../../styles/styled";

/**
 * A customizable button component designed to handle various actions and events in your application.
 * The Button component supports multiple variants, sizes, and states, making it versatile and adaptable
 * to different design and functionality needs.
 *
 * Props:
 * - `variant` (optional): Determines the style variant of the button. Options include:
 *   - `"solid"`: A button with a filled background.
 *   - `"outline"`: A button with a border and no background.
 *   - `"ghost"`: A transparent button with no border or background.
 * - `size` (optional): Specifies the size of the button. Common options might include:
 *   - `"sm"`: Small size.
 *   - `"md"`: Medium size (default).
 *   - `"lg"`: Large size.
 * - `radius` (optional): Defines the border-radius of the button, making its corners rounded.
 *   Options include `"sm"`, `"md"`, `"lg"`, `"xl"`, or `"full"`.
 * - `icon` (optional): Allows an icon to be displayed inside the button. Accepts JSX icons (e.g., `FaUser` from react-icons)
 *   without a fragment. If a fragment is used, it may cause the component to break.
 * - `isLoading` (optional): A boolean that, when set to `true`, displays a loading indicator within the button,
 *   indicating that an action is being processed.
 *
 * Features:
 * - Supports different styles and sizes to fit various design needs.
 * - Can display an optional icon within the button.
 * - Handles disabled and loading states to improve user experience.
 * - Triggers an `onClick` function to handle actions.
 *
 * Usage:
 * Use the Button component to trigger actions, submit forms, or navigate between pages.
 * This component is flexible enough to handle various scenarios in your application.
 *
 * Example:
 * ```
 * <Button
 *   variant="outline"
 *   size="md"
 *   radius="lg"
 *   onClick={() => console.log("Button clicked!")}
 *   icon={FaUser}
 * >
 *   Click Me
 * </Button>
 * ```
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
  const disabled = props.disabled;
  return (
    <StyledButton
      disabled={isLoading || disabled}
      {...props}
      variant={variant}
      size={size}
      radius={radius}
    >
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
