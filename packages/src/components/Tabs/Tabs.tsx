import React, { useState } from 'react';
import TabsList, { TabsListType } from './TabsList';
import TabsHandle from './TabsHandle';
import Box from '../Box/Box';
import TabPanel from './TabPanel';
import { styled } from 'styled-chroma';
import { useMode } from '../../hooks/useMode';

/**
 * Tab component for creating tabbed interfaces.
 *
 * This component manages the state of active tab and renders TabsList and TabPanel components.
 * It allows for customization of tab appearance and behavior through various props.
 *
 * @component
 * @param {Object} props - The properties that define the Tab component's behavior and appearance.
 * @param {ReactNode} props.children - The child elements, expected to be TabsHandle and TabPanel components.
 * @param {'line' | 'enclosed' | 'enclosed-colored' | 'soft-rounded' | 'solid-rounded' | 'unstyled'} [props.variant='line'] - The visual variant of the tabs.
 * @param {'light' | 'dark'} [props.mode] - The color mode of the tabs.
 * @param {boolean} [props.fullWidth] - Whether the tabs should take up the full width of their container.
 * @param {string} [props.backgroundColor] - The background color of the tabs.
 * @param {string} [props.lineBorderColor] - The color of the line border for the 'line' variant.
 * @returns {JSX.Element} The rendered Tab component.
 */

const Tab = ({
  children,
  variant = 'line',
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

  const { mode: themeMode } = useMode();
  const currentMode = mode ?? themeMode;

  return (
    <Tabs>
      <TabsList
        variant={variant}
        fullWidth={fullWidth}
        lineBorderColor={lineBorderColor}
        backgroundColor={backgroundColor}
        mode={currentMode as TabsListType['mode']}
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

const ContentWrapper = styled('div')`
  margin-top: 2px;
`;
