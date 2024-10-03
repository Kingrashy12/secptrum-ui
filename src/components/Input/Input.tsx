import { colors } from "../../styles/colors";
import { forwardRef, useEffect, useState } from "react";
import { Input, InputForm } from "../../styles/input/styled";
import { RiErrorWarningFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useTheme } from "../../context/useTheme";
import Icon from "../Icon/Icon";
import { InputType } from "../../types";

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

const TextInput = forwardRef<HTMLInputElement, InputType>(
  (
    {
      icon,
      variant = "outline",
      radius = "lg",
      Type,
      iconSize = 20,
      outLineBorderColor,
      focusBorderColor,
      focusColor,
      hasError,
      errorMessage,
      width,
      mode,
      inputStyle,
      formStyle,
      color,
      formClassName,
      backgroundColor,
      inputClass,
      fullWidth,
      ...props
    },
    ref
  ): JSX.Element => {
    const [inputType, setInputType] = useState(props.type);
    const { theme, mode: themeMode } = useTheme();
    const [m, setM] = useState(mode);

    useEffect(() => {
      if (mode) {
        setM(mode);
      } else {
        setM(themeMode as InputType["mode"]);
      }
    }, [mode, themeMode]);

    const typeMap = {
      email: "email",
      text: "text",
      password: "password",
      number: "number",
    };

    const getType = (type: InputType["Type"]) => {
      if (!type) {
        setInputType("text");
        return;
      }
      setInputType(typeMap[type] || "text");
    };

    useEffect(() => {
      getType(Type);
    }, [Type]);

    const isPassword = inputType === "password";

    const togglePasswordVisibility = () => {
      setInputType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    };

    const getWidth = () => {
      if (fullWidth) {
        return `100%`;
      } else return width;
    };

    return (
      <InputForm className={formClassName} width={getWidth()} style={formStyle}>
        <Input
          disabled={props.disabled}
          backgroundcolor={backgroundColor}
          error={hasError}
          color={color}
          mode={m}
          outlinebordercolor={
            outLineBorderColor || theme.colors?.outline_ButtonBorderColor
          }
          variant={variant}
          radius={radius}
          className={props.className}
          focusBorderColor={focusBorderColor}
          focusColor={focusColor}
          style={props.style}
        >
          {icon ? (
            <Icon
              className="Icon__Sui"
              size={iconSize}
              icon={icon}
              color={colors.neutral[500]}
            />
          ) : null}
          <input
            {...props}
            ref={ref}
            className={inputClass}
            style={inputStyle}
            type={inputType}
            placeholder={props.placeholder || "Type here..."}
          />
          {Type === "password" && (
            <Icon
              onClick={togglePasswordVisibility}
              size={20}
              icon={isPassword ? RiEyeFill : RiEyeOffFill}
              className="eye_pass"
            />
          )}
        </Input>
        {hasError && (
          <p>
            {" "}
            <Icon
              className="Icon__Sui"
              size={15}
              icon={RiErrorWarningFill}
              color="red"
            />{" "}
            {errorMessage}
          </p>
        )}
      </InputForm>
    );
  }
);

export default TextInput;
