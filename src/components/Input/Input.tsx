import { colors } from "../../styles/colors";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { InputType } from "@/types";
import {
  getInputRadius,
  getInputVariantStyles,
} from "../../utils/getPropsStyle";
import Icon from "../Icon/Icon";

/**
 * A React component that extends the HTML `<input>` element to provide additional styling and functionality.
 *
 * The `Input` component can be customized using standard HTML input attributes and additional props like `variant`,
 * `Type`, `radius`, and more.
 *
 * @component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input for more information on standard HTML input attributes.
 */

const Input = ({
  icon,
  variant = "solid",
  radius = "sm",
  Type,
  ...props
}: InputType): JSX.Element => {
  const StyledInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px;
    gap: 6px;
    border-radius: ${getInputRadius(radius)};
    ${getInputVariantStyles(variant)};

    &:focus-within {
      outline-color: ${colors.blue500};
      border: 1.8px solid ${colors.blue500};
    }

    input {
      font-weight: 600;
      outline: none;
      width: 100%;
      border: none;
      background: transparent;
      caret-color: ${colors.blue500};
      color: black;
    }
    input :focus {
      outline: none;
      border: none;
    }
    .eye_pass {
      cursor: pointer;
    }
  `;
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
    <StyledInput>
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
