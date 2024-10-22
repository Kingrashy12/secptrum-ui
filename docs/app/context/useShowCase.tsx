'use client';

import ShowCaseProject from '@/components/custom/ShowCaseProject';
import { createContext, useContext, useState } from 'react';

const ShowcaseFormContext = createContext<ModalContextType | undefined>(
  undefined
);

const ShowcaseFormProvider = ({ children }: ContextProviderType) => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <ShowcaseFormContext.Provider value={{ isOpen, onClose, onOpen }}>
      {isOpen && <ShowCaseProject />}
      {children}
    </ShowcaseFormContext.Provider>
  );
};

export default ShowcaseFormProvider;

export const useShowcaseForm = () => {
  const context = useContext(ShowcaseFormContext);
  if (context === undefined) {
    throw new Error('useShowcaseForm should not be used outside it provider');
  }
  return context;
};
