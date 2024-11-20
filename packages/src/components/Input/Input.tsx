import { forwardRef, useEffect, useState } from "react";
import { Input, InputForm } from "../../styles/input/styled";
import { RiErrorWarningFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import Icon from "../Icon/Icon";
import { InputType } from "../../types/sui";
import { colors } from "../../styles/colors";
import { useMode } from "../../hooks/useMode";

/**
 * A customizable Input component for text, email, password, and number inputs.
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
    const { mode: themeMode } = useMode();
    const currentMode = mode ?? themeMode;

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
          hasError={hasError}
          color={color}
          mode={currentMode as InputType["mode"]}
          outLineBorderColor={outLineBorderColor}
          variant={variant}
          radius={radius}
          className={props.className}
          focusBorderColor={focusBorderColor}
          focusColor={focusColor}
          style={props.style}
          Type={Type}
          onHoverBg={props.onHoverBg}
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
TextInput.displayName = "Sui.TextInputSui";
