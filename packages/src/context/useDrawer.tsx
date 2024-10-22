import React, { createContext, useContext } from "react";

type ProviderType = {
  children: React.ReactNode;
  mode: "light" | "dark";
};

const DrawerContext = createContext<{ mode: "light" | "dark" } | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};

const DrawerProvider = ({ children, mode }: ProviderType) => {
  return (
    <DrawerContext.Provider value={{ mode }}>{children}</DrawerContext.Provider>
  );
};

export default DrawerProvider;
