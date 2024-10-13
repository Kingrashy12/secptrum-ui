import { colors } from "../../styles/colors";
import { SwitchHandle, SwitchSui } from "../../styles/input/styled";

type SwitchType = {
  /**
   * The background color of the switch when it is not checked.
   * @default colors.neutral300
   */
  color?: string;

  /**
   * The background color of the switch when it is checked.
   * @default "blue"
   */
  checkedColor?: string;

  /**
   * The size of the switch, which determines its width and height.
   * Can be either "md" (medium) or "lg" (large).
   * @default "md"
   */
  size?: "md" | "lg";
  /**
   * Callback function triggered when the switch is toggled.
   */
  onSwitch: () => void;

  /**
   * Indicates whether the switch is currently checked (on) or not (off).
   * @default false
   */
  checked: boolean;
  /**
   * Optional class name for custom styling.
   */
  className?: string;
  /**
   * Disables the switch when set to true, preventing user interaction.
   */
  disabled?: boolean;
};

const getSize = (size: SwitchType["size"]) => {
  switch (size) {
    case "md":
      return { width: `35px`, height: `22px` };
    case "lg":
      return { width: `44px`, height: `27px` };
    default:
      return { width: `35px`, height: `22px` };
  }
};
const getSwitchSize = (size: SwitchType["size"]) => {
  switch (size) {
    case "md":
      return { width: `15px`, height: `15px` };
    case "lg":
      return { width: `22px`, height: `22px` };
    default:
      return { width: `15px`, height: `15px` };
  }
};

const Switch = ({
  color = colors.neutral[300],
  checkedColor = "blue",
  size = "md",
  onSwitch,
  className,
  checked = false,
  disabled,
}: SwitchType) => {
  const { width, height } = getSize(size);
  const { width: switchWidth, height: switchHeight } = getSwitchSize(size);

  return (
    <SwitchSui
      width={width}
      height={height}
      checked={checked}
      checkedColor={checkedColor}
      color={color}
      onClick={onSwitch}
      className={className}
      disabled={disabled}
    >
      <SwitchHandle
        height={switchHeight}
        switchWidth={switchWidth}
        checked={checked}
      />
    </SwitchSui>
  );
};

export default Switch;
