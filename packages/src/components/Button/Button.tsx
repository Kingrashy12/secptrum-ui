import { forwardRef } from "react";
import { TbLoader2 } from "react-icons/tb";
import Icon from "../Icon/Icon";
import { ButtonProps } from "../../types/sui";
import { ButtonSui } from "../../styles/action/styled";
import { useMode } from "../../hooks/useMode";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      mode,
      size = "md",
      radius = "md",
      variant = "solid",
      rightIcon,
      leftIcon,
      iconSize,
      spacing = "sm",
      ...props
    },
    ref
  ) => {
    const { mode: themeMode } = useMode();
    const currentMode = mode ?? themeMode;

    const getWidth = () => {
      if (props.fullWidth) return "100%";
      if (props.width) return props.width;
      return "fit-content";
    };

    return (
      <ButtonSui
        mode={currentMode as ButtonProps["mode"]}
        size={size}
        radius={radius}
        variant={variant}
        width={getWidth()}
        spacing={spacing}
        disabled={props.disabled || props.isLoading}
        {...props}
        ref={ref}
      >
        {props.isLoading ? (
          <>
            <TbLoader2 className="loader" />
            {children}
          </>
        ) : (
          ((
            <>
              {leftIcon && <Icon size={iconSize} icon={leftIcon} />}
              {children}
              {rightIcon && <Icon size={iconSize} icon={rightIcon} />}
            </>
          ) as any)
        )}
      </ButtonSui>
    );
  }
);

export default Button;
Button.displayName = "Sui.Button";
