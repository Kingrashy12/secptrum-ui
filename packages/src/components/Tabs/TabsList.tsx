import React from "react";
import TabListProvider from "../../context/useTabList";
import { IStyleTabList } from "../../types/istyle";
import { colors, css, styled } from "styled-chroma";
import { getModeStyle } from "../../utils/mode";
import { useMode } from "../../hooks/useMode";

export type TabsListType = {
  /**
   * The content to be rendered inside the list of tabs, typically an array of tab components.
   */
  children?: React.ReactNode;
  /**
   * The visual style variant for the tab list, either `line` (with an underline) or `solid` (with filled background).
   * @default "line"
   */
  variant?: "line" | "solid";
  /**
   * Sets the theme mode for the input component.
   *
   * Options:
   * - `light` (default)
   * - `dark`
   * - Custom theme mode (override default styles)
   *
   * Allows developers to integrate with apps that support light/dark modes or provide a custom design.
   * @type {"light" | "dark"}
   */
  mode?: "light" | "dark";
  /**
   * Determines whether the Tabs should stretch to full width.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Sets the background color of the TabsList.
   * @default 'transparent'
   */
  backgroundColor?: string;

  /**
   * Sets the color of the line border on `line` variant.
   * @default '#000'
   */
  lineBorderColor?: string;
  /**
   * A custom class name to apply to the TabsList component.
   * This allows for additional styling or customization.
   */
  className?: string;
};

const getTabWidth = (
  variant: TabsListType["variant"],
  fullWidth: TabsListType["fullWidth"]
) => {
  switch (variant) {
    case "line":
      return { width: "auto" };
    case "solid":
      return { width: fullWidth ? "auto" : "fit-content" };
  }
};

const TabsList = ({
  children,
  variant,
  backgroundColor,
  lineBorderColor,
  fullWidth,
  className,
  mode,
}: TabsListType) => {
  const { mode: themeMode } = useMode();
  const currentMode = mode ?? themeMode;

  const tablistStyle = {
    background:
      backgroundColor ||
      getModeStyle(currentMode as "light" | "dark")?.tabListBg,
    lineBorder:
      lineBorderColor ||
      getModeStyle(currentMode as "light" | "dark")?.lineBorder,
  };
  return (
    <TabListProvider
      useFullWidth={fullWidth}
      tabVariant={variant as "line" | "solid"}
      mode={currentMode as "light" | "dark"}
    >
      <TabList
        backgroundcolor={tablistStyle.background}
        lineColor={tablistStyle.lineBorder}
        variant={variant}
        direction="row"
        fullWidth={fullWidth}
        className={className}
      >
        {children}
      </TabList>
    </TabListProvider>
  );
};

export default TabsList;
TabsList.displayName = "TabsListSui";

const TabList = styled<IStyleTabList>("div")`
  padding: 0;
  border-bottom: ${(props) =>
    props.variant === "line" ? `1px solid ${props.lineColor}` : "none"};
  padding: ${(props) => (props.variant === "solid" ? "5px" : 0)};
  border-radius: ${(props) => (props.variant === "solid" ? "4.5px" : "none")};
  background: ${(props) =>
    props.variant === "solid" ? props.backgroundcolor : "transparent"};
  align-items: center;
  overflow-x: auto;
  max-width: 100%;
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.blue[500]};
    border-radius: 4px;
    cursor: pointer;
  }
  ${(props) => {
    const width = getTabWidth(props.variant, props.fullWidth);
    return css`
      width: ${width?.width};
    `;
  }};
  gap: 1px;
  border-top: none;
  display: flex;
  position: relative;
`;
TabList.displayName = "TabListSui";
