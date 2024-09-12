import React, { ComponentPropsWithRef, useEffect } from "react";
import { StyledPanel } from "../../styles/styled";
import Modal from "./Modal";
import { useModalContext } from "../../context/useModalContext";

type PanelProps = ComponentPropsWithRef<"div">;

interface PanelType extends PanelProps {
  children: React.ReactNode;
  align?: "vertical" | "horizontal";
}
const ModalPanel = ({ children, align, ...props }: PanelType) => {
  useModalContext();

  return (
    <StyledPanel
      align={align}
      {...props}
      onClick={(e) => e.stopPropagation()}
      className={props.className}
    >
      {children}
    </StyledPanel>
  );
};

export default ModalPanel;
