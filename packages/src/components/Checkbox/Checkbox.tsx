import { Checked, Checker } from '../../styles/input/styled';
import { IoIosCheckmark } from 'react-icons/io';
import Icon from '../Icon/Icon';
import { colors } from '../../styles/colors';
import { useMode } from '../../hooks/useMode';

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
  /**
   * Specifies the mode of the checkbox. Can be either "dark" or "light".
   * @default "light"
   */
  mode?: 'dark' | 'light';
};

const CheckBox = ({
  rounded,
  size = 20,
  color = 'blue',
  checked,
  onCheck,
  disabled,
  className,
  borderColor,
  mode = 'light',
}: CheckBoxType) => {
  const { mode: themeMode } = useMode();
  const currentMode = mode ?? themeMode;
  const checkStyle = {
    border: currentMode === 'dark' ? colors.neutral[700] : colors.neutral[200],
  };
  return (
    <Checker
      onClick={onCheck}
      size={size}
      rounded={rounded}
      disabled={disabled}
      className={className}
      checked={checked}
      borderColor={borderColor || checkStyle.border}
    >
      {checked ? (
        <Checked color={color} rounded={rounded} size={size}>
          <Icon icon={IoIosCheckmark} size={size} color="white" />
        </Checked>
      ) : null}
    </Checker>
  );
};

export default CheckBox;
CheckBox.displayName = 'CheckBox';
