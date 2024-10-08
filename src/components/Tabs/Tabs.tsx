import React, { useState } from "react";
import styled from "styled-components";
import TabsList, { TabsListType } from "./TabsList";
import TabsHandle from "./TabsHandle";
import Box from "../Box/Box";
import TabPanel from "./TabPanel";

const Tab = ({
  children,
  variant = "line",
  mode,
  fullWidth,
  backgroundColor,
  lineBorderColor,
}: TabsListType) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Get the tab labels and content by filtering the children
  const tabs = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).type === TabsHandle
  );
  const tabPanels = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).type === TabPanel
  );
  return (
    <Tabs>
      <TabsList
        variant={variant}
        fullWidth={fullWidth}
        lineBorderColor={lineBorderColor}
        backgroundColor={backgroundColor}
        mode={mode}
      >
        {tabs.map((tab, index) => (
          <TabsHandle
            key={index}
            value={(tab as React.ReactElement).props.value}
            isActive={index === activeTabIndex}
            iconSize={(tab as React.ReactElement).props.iconSize}
            icon={(tab as React.ReactElement).props.icon}
            onClick={() => setActiveTabIndex(index)}
            disabled={(tab as React.ReactElement).props.disabled}
            activeColor={(tab as React.ReactElement).props.activeColor}
            activeSolidColor={
              (tab as React.ReactElement).props.activeSolidColor
            }
            inActiveColor={(tab as React.ReactElement).props.inActiveColor}
            className={(tab as React.ReactElement).props.className}
            style={(tab as React.ReactElement).props.style}
          >
            {(tab as React.ReactElement).props.children}
          </TabsHandle>
        ))}
      </TabsList>
      <ContentWrapper>{tabPanels[activeTabIndex]}</ContentWrapper>
    </Tabs>
  );
};

export default Tab;

const Tabs = styled(Box)`
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  margin-top: 2px;
`;
