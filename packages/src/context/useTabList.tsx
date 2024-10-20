import { createContext, useContext, useEffect, useState } from 'react';

type TabListContextType = {
  onSwitch: (value: string) => void;
  variant: 'line' | 'solid';
  activeTabValue: string;
  themeMode: 'light' | 'dark';
  fullWidth?: boolean;
};

type TabListProviderType = {
  children: React.ReactNode;
  tabVariant: 'line' | 'solid';
  mode: 'light' | 'dark';
  useFullWidth?: boolean;
};

const ListContext = createContext<TabListContextType | undefined>(undefined);

const TabListProvider = ({
  children,
  tabVariant,
  mode,
  useFullWidth,
}: TabListProviderType) => {
  const [activeTabValue, setActiveTabValue] = useState('');
  const [themeMode, setThemeMode] = useState(mode);
  const [fullWidth, setFullWidth] = useState(useFullWidth);
  const [variant, setVaraint] =
    useState<TabListContextType['variant']>(tabVariant);

  useEffect(() => {
    setVaraint(tabVariant);
  }, [tabVariant]);

  useEffect(() => {
    setThemeMode(mode);
  }, [mode]);

  useEffect(() => {
    setFullWidth(useFullWidth);
  }, [useFullWidth]);

  useEffect(() => {
    const tab = document.querySelectorAll('button');
    if (!activeTabValue) {
      setActiveTabValue(tab[0].value);
    }
  }, [activeTabValue]);

  function onSwitch(value: string) {
    setActiveTabValue(value);
  }

  return (
    <ListContext.Provider
      value={{ onSwitch, themeMode, activeTabValue, variant, fullWidth }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default TabListProvider;
TabListProvider.displayName = 'TabListProvider';

/* eslint-disable */

export const useTabList = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('TabHandle must be used within TabsList components');
  }
  return context;
};
