import React, { useEffect } from "react";
import ModalProvider, { useModal } from "../../context/useModal";
import { ModalContainer } from "../../styles/styled";

type ModalType = {
  open: boolean;
  onClose: () => void;
  className?: string;
  styles?: React.CSSProperties;
  children: React.ReactNode;
};

const Modal = ({ onClose, open, children, className, styles }: ModalType) => {
  return (
    <ModalProvider>
      <ModalContainer onClick={onClose} open={open}>
        {children}
      </ModalContainer>
    </ModalProvider>
  );
};

export default Modal;
