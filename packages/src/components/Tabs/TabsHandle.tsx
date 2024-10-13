import React from "react";
import { TabHandle } from "../../styles/layout/styled";
import { colors } from "../../styles/colors";
import { useTabList } from "../../context/useTabList";
import { getModeStyle } from "../../utils/mode";

type TabsHandleType = {
  /**
   * The content to be rendered inside the tab.
   */
  children?: React.ReactNode;
  /**
   * The color to be applied when the tab is active.
   * @default "blue"
   */
  activeColor?: string;
  /**
   * The color to be applied when the tab is active on @param variant `solid`.
   * @default "black"
   */
  activeSolidColor?: string;
  /**
   * The color to be applied when the tab is inactive.
   * @default "neutral"
   */
  inActiveColor?: string;
  /**
   * The unique identifier or value for the tab, typically used to track the selected tab.
   */
  value: string;
  /**
   * The function to be called when the tab is clicked.
   */
  onClick?: () => void;
  /**
   * If true, disables the tab, preventing interaction.
   */
  disabled?: boolean;
  /**
   * Optional additional CSS class for styling the TabsHandle.
   */
  className?: string;

  /**
   * Inline styles for the TabsHandle.
   */
  style?: React.CSSProperties;

  /**
   * Indicates whether the TabsHandle is currently active.
   * @default false
   */
  isActive?: boolean;

  /**
   * The icon component to be rendered in the TabsHandle.
   * Can be any valid React component type.
   */
  icon?: React.ElementType;

  /**
   * The size of the icon in pixels.
   * @default 16
   */
  iconSize?: number;
};

const TabsHandle: React.FC<TabsHandleType> = ({
  children,
  activeColor,
  activeSolidColor,
  inActiveColor = colors.neutral[400],
  value,
  onClick,
  disabled = false,
  className,
  style,
  isActive,
  icon: IconComponent,
  iconSize = 16,
}) => {
  const { onSwitch, variant, themeMode, fullWidth } = useTabList();

  function switchTab() {
    onSwitch(value);
    if (onClick) {
      onClick();
    }
  }
  const isCurrent = isActive as boolean;

  const handleStyle = {
    activeColor: activeColor || getModeStyle(themeMode)?.active_TabColor,
    activeSolidColor:
      activeSolidColor || getModeStyle(themeMode)?.active_TabColor_Solid,
  };

  return (
    <TabHandle
      activeColor={
        variant === "solid"
          ? handleStyle.activeSolidColor
          : handleStyle.activeColor
      }
      iscurrent={isCurrent}
      value={value}
      onClick={switchTab}
      variant={variant}
      disabled={disabled}
      inactivecolor={inActiveColor}
      fullWidth={fullWidth}
      className={className}
      style={style}
    >
      {IconComponent && <IconComponent size={iconSize} />}
      {children}
    </TabHandle>
  );
};

export default TabsHandle;
