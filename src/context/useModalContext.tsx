import React, { createContext, useContext } from "react";

const ModalContext = createContext<boolean | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("ModalPanel must be used within the Modal component");
  }
  return context;
};

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  return <ModalContext.Provider value={true}>{children}</ModalContext.Provider>;
};

export { ModalProvider };
