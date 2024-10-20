import React, { createContext, useContext, useState } from 'react';

type ProviderType = { children: React.ReactNode; open: boolean };

const ModalContext = createContext<{ isVisible: boolean } | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('ModalPanel must be used within the Modal component');
  }
  return context;
};

const ModalProvider = ({ children, open }: ProviderType) => {
  const [isVisible, setIsVisile] = useState(open);
  React.useEffect(() => {
    setIsVisile(open);
  }, [open]);
  return (
    <ModalContext.Provider value={{ isVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
ModalProvider.displayName = 'ModalProvider';
