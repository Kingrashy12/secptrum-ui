import React, { useState } from "react";
import Icon from "../Icon/Icon";
import {
  MdCheckBox,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

type CheckBoxType = {
  /**
   * Specifies whether the checkbox should have rounded corners.
   * @default false
   */
  rounded?: boolean;

  /**
   * Defines the size of the checkbox.
   * @default 25
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
   * Specifies if the checkbox is being used in a Storybook story.
   * @default false
   */
  isStory?: boolean;

  /**
   * Defines any child elements that should be rendered inside the checkbox component on storybook.
   */
  children?: React.ReactNode;
  disabled?: boolean;
};

const Checkbox = ({
  rounded,
  size = 25,
  color = "blue",
  checked,
  onCheck,
  isStory,
  children,
  disabled,
}: CheckBoxType) => {
  const roundedIcon = checked
    ? IoIosCheckmarkCircle
    : MdOutlineRadioButtonUnchecked;
  const defaultIcon = checked ? MdCheckBox : MdOutlineCheckBoxOutlineBlank;

  return (
    <>
      {isStory ? (
        children
      ) : (
        <Icon
          icon={rounded ? roundedIcon : defaultIcon}
          onClick={
            disabled ? () => console.log("checkbox is disabled") : onCheck
          }
          size={size}
          styles={{
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.5 : 1,
          }}
          color={color}
        />
      )}
    </>
  );
};

export default Checkbox;
