import TabListProvider from "../../context/useTabList";
import { useTheme } from "../../context/useTheme";
import { getModeStyle } from "../../lib/helper/theme";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Stack from "../Stack/Stack";
import { colors } from "../../styles/colors";
import { getClassName } from "../../utils/helper/secptrum";

/**
 * Type definition for TabsListType, representing the properties of a list of tabs.
 */
type TabsListType = {
  /**
   * The content to be rendered inside the list of tabs, typically an array of tab components.
   */
  children?: React.ReactNode;
  /**
   * The visual style variant for the tab list, either `line` (with an underline) or `solid` (with filled background).
   * @default "line"
   */
  variant?: "line" | "solid";
  backgroundColor?: string;
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
};

const TabsList = ({
  children,
  variant = "line",
  backgroundColor,
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
  };
  return (
    <TabListProvider tabVariant={variant} mode={m as "light" | "dark"}>
      <TabList
        backgroundcolor={tablistStyle.background}
        variant={variant}
        align="horizontal"
      >
        {children}
      </TabList>
    </TabListProvider>
  );
};

export default TabsList;

const TabList = styled(Stack)<{
  variant: TabsListType["variant"];
  backgroundcolor: string | any;
}>`
  padding: 0;
  border-bottom: ${(props) =>
    props.variant === "line" ? `1px solid ${colors.neutral[200]}` : "none"};
  padding: ${(props) => (props.variant === "solid" ? "5px" : 0)};
  border-radius: ${(props) => (props.variant === "solid" ? "6px" : "none")};
  background: ${(props) =>
    props.variant === "solid" ? props.backgroundcolor : "transparent"};
  align-items: center;
  width: auto;
`;

TabList.defaultProps = {
  className: getClassName(TabList),
};
