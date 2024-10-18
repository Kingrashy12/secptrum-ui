'use client';

import SideBarModal from '@/components/modal/mobile/SideBarModal';
import { createContext, useContext, useState } from 'react';

const SideBarContext = createContext<ModalContextType | undefined>(undefined);

const SideBarProvider = ({ children }: ContextProviderType) => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <SideBarContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
      {isOpen && <SideBarModal />}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;

export const useSideBar = () => {
  const context = useContext(SideBarContext);
  if (context === undefined) {
    throw new Error('useSideBar must be used within a SideBarProvider');
  }
  return context;
};
