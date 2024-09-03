import { createContext, useContext, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const ModalContext = createContext<ModalProps | undefined>(undefined);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("ModalPanel must be used within the Modal");
  }
  return context;
};
