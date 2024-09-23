import { useTheme } from "../../context/useTheme";
import { CheckBox, Checked } from "../../styles/input/styled";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import Icon from "../Icon/Icon";

type CheckBoxType = {
  /**
   * Specifies whether the checkbox should have rounded corners.
   * @default false
   */
  rounded?: boolean;

  /**
   * Defines the size of the checkbox.
   * @default 20
   */
  size?: number;

  /**
   * Sets the color of the checkbox. Accepts any valid CSS color string.
   * @default "blue"
   */
  color?: string;

  /**
   * Indicates whether the checkbox is currently checked.
   */
  checked: boolean;

  /**
   * Callback function triggered when the checkbox is checked or unchecked.
   */
  onCheck: () => void;
  /**
   * Disables the checkbox if set to true, preventing user interaction.
   * @type {boolean}
   */
  disabled?: boolean;

  /**
   * Optional className for custom styling of the checkbox component.
   * @type {string}
   */
  className?: string;

  /**
   * Specifies the border color of the checkbox.
   * Accepts any valid CSS color value (e.g., "red", "#f00", "rgb(255, 0, 0)").
   * @type {string}
   */
  borderColor?: string;
};

const Ch = ({
  rounded,
  size = 20,
  color = "blue",
  checked,
  onCheck,
  disabled,
  className,
  borderColor,
}: CheckBoxType) => {
  const { theme } = useTheme();
  return (
    <CheckBox
      onClick={onCheck}
      size={size}
      rounded={rounded}
      disabled={disabled}
      className={className}
      checked={checked}
      borderColor={borderColor || theme.colors?.checkBoxBorderColor}
    >
      {checked ? (
        <Checked color={color} rounded={rounded} size={size}>
          <Icon icon={IoIosCheckmark} size={size} color="white" />
        </Checked>
      ) : null}
    </CheckBox>
  );
};

export default Ch;
