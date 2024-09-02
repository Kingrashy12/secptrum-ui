import { colors } from "../../styles/colors";
import React, { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { InputType } from "@/types";
import Icon from "../Icon/Icon";
import { StyledInput } from "../../styles/styled";

/**
 * A versatile input field component that supports different types, styles, and additional features
 * like icons. The Input component is designed to be highly customizable, making it suitable for
 * various use cases such as forms, search bars, and user data entry.
 *
 * Props:
 * - `icon`: Allows an icon to be displayed inside the input field. Accepts JSX icons (e.g., `FaUser` from react-icons)
 *   without a fragment. If a fragment is used, it may cause the component to break.
 * - `Type`: Specifies the type of input. Accepts standard HTML input types such as "text", "password", "email".
 * - `variant`: Controls the style variant of the input. Options include:
 *   - `"solid"`: A filled input style with a background.
 *   - `"outline"`: An input with an outline border.
 *   - `"ghost"`: A transparent input with no border or background.
 * - `radius`: Defines the border-radius of the input to create rounded corners. Accepts predefined sizes:
 *   - `"sm"`: Small radius.
 *   - `"md"`: Medium radius.
 *   - `"lg"`: Large radius.
 *   - `"xl"`: Extra-large radius.
 *   - `"full"`: Completely rounded corners.
 *
 * Usage:
 * Use the Input component to create user input fields with different types, styles, and optional icons.
 * This component provides a flexible way to handle input across your application with consistent styling.
 *
 * Example:
 * ```
 * <Input
 *   icon={FaUser}
 *   Type="text"
 *   variant="outline"
 *   radius="md"
 *   placeholder="Enter your username"
 * />
 * ```
 */

const Input = ({
  icon,
  variant = "solid",
  radius = "sm",
  Type,
  ...props
}: InputType): JSX.Element => {
  const [type, setType] = useState(props.type ? props.type : "text");
  const password = type === "password";
  const typePass = Type === "password";

  useEffect(() => {
    if (Type === "password") {
      setType("password");
    }
  }, [Type]);

  function seePass() {
    if (type === "password") {
      setType("text");
    } else if (type === "text") {
      setType("password");
    }
  }

  return (
    <StyledInput variant={variant} radius={radius}>
      {icon && <Icon size={22} icon={icon} color={colors.neutral500} />}
      <input type={type} {...props} />
      {typePass && (
        <Icon
          onClick={seePass}
          size={22}
          icon={password ? IoMdEye : IoMdEyeOff}
          color={colors.neutral600}
          className="eye_pass"
        />
      )}
    </StyledInput>
  );
};

export default Input;
