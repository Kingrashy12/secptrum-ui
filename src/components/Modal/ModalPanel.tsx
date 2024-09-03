import React, { ComponentPropsWithRef } from "react";
import { StyledPanel } from "../../styles/styled";

type PanelProps = ComponentPropsWithRef<"div">;

interface PanelType extends PanelProps {
  children: React.ReactNode;
  align?: "vertical" | "horizontal";
}
const ModalPanel = ({ children, align, ...props }: PanelType) => {
  return (
    <StyledPanel align={align} {...props} onClick={(e) => e.stopPropagation()}>
      {children}
    </StyledPanel>
  );
};

export default ModalPanel;
