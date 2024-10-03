import React, { useEffect, useState } from "react";
import TabListProvider from "../../context/useTabList";
import { useTheme } from "../../context/useTheme";
import { getModeStyle } from "../../lib/helper/theme";
import styled from "styled-components";
import Box from "../Box/Box";

/**
 * Type definition for TabsListType, representing the properties of a list of tabs.
 */
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
      backgroundColor || getModeStyle(m as "light" | "dark")?.tabListBackground,
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
        line-color={tablistStyle.lineBorder}
        variant={variant}
        direction="row"
        full-width={fullWidth}
      >
        {children}
      </TabList>
    </TabListProvider>
  );
};

export default TabsList;

const TabList = styled(Box)<{
  variant: TabsListType["variant"];
  backgroundcolor: string | any;
  "full-width": TabsListType["fullWidth"];
  "line-color": string | any;
}>`
  padding: 0;
  border-bottom: ${(props) =>
    props.variant === "line" ? `1px solid ${props["line-color"]}` : "none"};
  padding: ${(props) => (props.variant === "solid" ? "5px" : 0)};
  border-radius: ${(props) => (props.variant === "solid" ? "4.5px" : "none")};
  background: ${(props) =>
    props.variant === "solid" ? props.backgroundcolor : "transparent"};
  align-items: center;
  ${(props) => getTabWidth(props.variant, props["full-width"])};
  gap: 1px;
`;
