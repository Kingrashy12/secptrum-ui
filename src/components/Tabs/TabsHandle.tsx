import { colors } from "../../styles/colors";
import { useTabList } from "../../context/useTabList";
import { getModeStyle } from "../../lib/helper/theme";
import { TabHandle } from "../../styles/layout/styled";
import React, { forwardRef } from "react";

/**
 * Type definition for TabsHandleType, representing the properties of a tab component.
 */
type TabsHandleType = {
  /**
   * The content to be rendered inside the tab.
   */
  children?: React.ReactNode;
  /**
   * The color to be applied when the tab is active.
   * @default "black"
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
};

const TabsHandle = forwardRef<HTMLButtonElement, TabsHandleType>(
  (
    {
      children,
      activeColor,
      activeSolidColor,
      inActiveColor = colors.neutral[400],
      value,
      onClick,
      disabled = false,
    },
    ref
  ) => {
    const { onSwitch, activeTabValue, variant, themeMode } = useTabList();

    function switchTab() {
      onSwitch(value);
      if (onClick) {
        onClick();
      }
    }
    const isCurrent = activeTabValue === value;

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
        ref={ref}
        isCurrent={isCurrent}
        value={value}
        onClick={switchTab}
        variant={variant}
        disabled={disabled}
        inActiveColor={inActiveColor}
      >
        {children}
      </TabHandle>
    );
  }
);

export default TabsHandle;
