import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Icon from "../Icon/Icon";
import { ButtonProps } from "../../types";
import { Button } from "../../styles/action/styled";
import { useTheme } from "../../context/useTheme";
import { getModeStyle } from "../../lib/helper/theme";

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

const Btn = ({
  children,
  radius = "xl",
  variant = "solid",
  size = "md",
  icon,
  isLoading,
  iconPosition = "left",
  color,
  backgroundColor,
  onHoverBackgroundSolid,
  onHoverBackgroundOutline,
  onHoverBackgroundLight,
  onHoverBackgroundGhost,
  outlineBorderColor,
  width,
  iconSize,
  fullWidth,
  mode,
  ...props
}: ButtonProps): JSX.Element => {
  const disabled = props.disabled;
  const { mode: themeMode } = useTheme();
  const [m, setM] = useState(mode);

  useEffect(() => {
    if (mode) {
      setM(mode);
    } else {
      setM(themeMode as ButtonProps["mode"]);
    }
  }, [mode, themeMode]);

  const getColor = (
    varaint: ButtonProps["variant"],
    color: ButtonProps["color"],
    mode: "light" | "dark"
  ) => {
    switch (varaint) {
      case "outline":
        return `
          ${color ? color : getModeStyle(mode)?.text}
        `;
      default:
        return color;
    }
  };

  const getOulineBorder = () => {
    return getModeStyle(m as "light" | "dark")?.outline_ButtonBorderColor;
  };

  const getWidth = () => {
    if (fullWidth) {
      return `100%`;
    } else return width;
  };

  return (
    <Button
      backgroundcolor={backgroundColor}
      onHoverBackgroundSolid={onHoverBackgroundSolid}
      onHoverBackgroundGhost={onHoverBackgroundGhost}
      onHoverBackgroundLight={onHoverBackgroundLight}
      onHoverBackgroundOutline={onHoverBackgroundOutline}
      mode={m}
      outlinebordercolor={outlineBorderColor || getOulineBorder()}
      color={getColor(variant, color, m as "light" | "dark")}
      disabled={isLoading || disabled}
      {...props}
      variant={variant}
      size={size}
      radius={radius}
      width={getWidth()}
      className={props.className}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="loader" />
      ) : (
        <>
          {icon && iconPosition === "left"
            ? icon && <Icon size={iconSize} icon={icon} />
            : null}
        </>
      )}{" "}
      {children}
      {!isLoading && icon && iconPosition === "right"
        ? icon && <Icon size={iconSize} icon={icon} />
        : null}
    </Button>
  );
};

export default Btn;
