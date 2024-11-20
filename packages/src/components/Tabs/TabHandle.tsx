import React from "react";
import { TabHandleSui } from "../../styles/layout/styled";
import { colors } from "../../styles/colors";
import { useTabList } from "../../context/useTabList";
import { getModeStyle } from "../../utils/mode";

type TabHandleType = {
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
   * Optional additional CSS class for styling the TabHandle.
   */
  className?: string;

  /**
   * Inline styles for the TabHandle.
   */
  style?: React.CSSProperties;

  /**
   * Indicates whether the TabHandle is currently active.
   * @default false
   */
  isActive?: boolean;

  /**
   * The icon component to be rendered in the TabHandle.
   * Can be any valid React component type.
   */
  icon?: React.ElementType;

  /**
   * The size of the icon in pixels.
   * @default 16
   */
  iconSize?: number;
};

const TabHandle: React.FC<TabHandleType> = ({
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

  const switchTab = () => {
    onSwitch(value);
    if (onClick) {
      onClick();
    }
  };
  const isCurrent = isActive as boolean;

  const handleStyle = {
    activeColor: activeColor || getModeStyle(themeMode)?.active_TabColor,
    activeSolidColor:
      activeSolidColor || getModeStyle(themeMode)?.active_TabColor_Solid,
  };

  return (
    <TabHandleSui
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
    </TabHandleSui>
  );
};

export default TabHandle;
TabHandle.displayName = "Sui.TabHandle";
