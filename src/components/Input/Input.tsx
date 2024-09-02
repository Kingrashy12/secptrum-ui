import { colors } from "../../styles/colors";
import React, { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { InputType } from "@/types";
import Icon from "../Icon/Icon";
import { StyledInput } from "../../styles/styled";

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
