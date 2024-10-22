import React, { createContext, useContext, useState } from 'react';

type ProviderType = {
  children: React.ReactNode;
  open: boolean;
  mode: 'light' | 'dark';
};

const ModalContext = createContext<
  { isVisible: boolean; mode: 'light' | 'dark' } | undefined
>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

const ModalProvider = ({ children, open, mode }: ProviderType) => {
  const [isVisible, setIsVisile] = useState(open);
  React.useEffect(() => {
    setIsVisile(open);
  }, [open]);
  return (
    <ModalContext.Provider value={{ isVisible, mode }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
ModalProvider.displayName = 'ModalProvider';
