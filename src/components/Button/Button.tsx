import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Icon from "../Icon/Icon";
import { ButtonProps } from "@/types";
import { StyledButton } from "../../styles/styled";

const Button = ({
  children,
  radius = "xl",
  variant = "solid",
  size = "md",
  icon,
  isLoading,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton {...props} variant={variant} size={size} radius={radius}>
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
