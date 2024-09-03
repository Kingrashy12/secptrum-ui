import React, { useEffect } from "react";
import { useModal } from "../../context/useModal";
import { StyledPanel } from "../../styles/styled";

type PanelType = {
  children: React.ReactNode;
};
const ModalPanel = ({ children }: PanelType) => {
  const { onOpen, onClose: close } = useModal();

  return (
    <StyledPanel onClick={(e) => e.stopPropagation()}>{children}</StyledPanel>
  );
};

export default ModalPanel;
