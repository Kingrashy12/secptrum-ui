import React, { useEffect, useState } from "react";
import TabListProvider from "../../context/useTabList";
import { IStyleTabList } from "../../types/istyle";
import { css, styled, useTheme } from "styled-chroma";
import { getModeStyle } from "../../utils/mode";

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
  mode,
}: TabsListType) => {
  const { mode: themeMode } = useTheme();
  const [m, setM] = useState(mode);

  useEffect(() => {
    if (mode) {
      setM(mode);
    } else {
      setM(themeMode as TabsListType["mode"]);
    }
  }, [mode, themeMode]);

  const tablistStyle = {
    background:
      backgroundColor || getModeStyle(m as "light" | "dark")?.tabListBg,
    lineBorder:
      lineBorderColor || getModeStyle(m as "light" | "dark")?.lineBorder,
  };
  return (
    <TabListProvider
      useFullWidth={fullWidth}
      tabVariant={variant as "line" | "solid"}
      mode={m as "light" | "dark"}
    >
      <TabList
        backgroundcolor={tablistStyle.background}
        lineColor={tablistStyle.lineBorder}
        variant={variant}
        direction="row"
        fullWidth={fullWidth}
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
