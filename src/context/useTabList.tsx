import { createContext, useContext, useEffect, useState } from "react";
import { ContextProviderType } from "../types/local";

type TabListContextType = {
  onSwitch: (value: string) => void;
  variant: "line" | "solid";
  activeTabValue: string;
  themeMode: "light" | "dark";
};

type TabListProviderType = {
  children: ContextProviderType["children"];
  tabVariant: "line" | "solid";
  mode: "light" | "dark";
};

const ListContext = createContext<TabListContextType | undefined>(undefined);

const TabListProvider = ({
  children,
  tabVariant,
  mode,
}: TabListProviderType) => {
  const [activeTabValue, setActiveTabValue] = useState("");
  const [themeMode, setThemeMode] = useState(mode);
  const [variant, setVaraint] =
    useState<TabListContextType["variant"]>(tabVariant);

  useEffect(() => {
    setVaraint(tabVariant);
  }, [tabVariant]);

  useEffect(() => {
    setThemeMode(mode);
  }, [mode]);

  useEffect(() => {
    const tab = document.querySelectorAll("button");
    if (!activeTabValue) {
      setActiveTabValue(tab[0].value);
    }
  }, [activeTabValue]);

  function onSwitch(value: string) {
    setActiveTabValue(value);
  }

  return (
    <ListContext.Provider
      value={{ onSwitch, themeMode, activeTabValue, variant }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default TabListProvider;

export const useTabList = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error("TabHandle must be used within TabsList components");
  }
  return context;
};
