'use client';

import MenuModal from '@/components/modal/MenuModal';
import { createContext, useContext, useState } from 'react';

const MenuContext = createContext<ModalContextType | undefined>(undefined);

const MenuProvider = ({ children }: ContextProviderType) => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <MenuContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
      {isOpen && <MenuModal />}
    </MenuContext.Provider>
  );
};

export default MenuProvider;

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
