import React, { useState } from "react";
import { Box, colors, styled, useTheme } from "secptrum-ui";
import Typography from "./Typography";

type CollapsibleProps = {
  header: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const Collapsible = ({ header, children, isActive }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode } = useTheme();
  const light = mode === "light";
  const [canOpen, setCanOpen] = useState(isActive);

  function open() {
    setIsOpen(!isOpen);
    if (canOpen) {
      setCanOpen(false);
    }
  }

  return (
    <StyledCollapsible>
      <CollapsibleAction onClick={open} paddingLeft="md">
        <Typography>{header}</Typography>
      </CollapsibleAction>
      <ContentWrap light={light} open={isOpen} canOpen={canOpen}>
        {children}
      </ContentWrap>
    </StyledCollapsible>
  );
};

export default Collapsible;

const StyledCollapsible = styled(Box)`
  flex-direction: column;
  height: auto;
  padding: 5px;
`;

export const CollapsibleAction = styled(Box)`
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: ${(props) => props.theme?.colors?.text};
  justify-content: space-between;

  p {
    font-size: 14px;
    line-height: 1.5rem;
    font-weight: 500;
  }
`;

const ContentWrap = styled<{
  light: boolean;
  open: boolean;
  canOpen: boolean | unknown;
}>("div")`
  flex-direction: column;
  border-left: 1.5px solid
    ${(props) => (props.light ? colors.neutral[200] : "rgb(38 38 38)")};
  transition: all 0.3s ease-in-out;
  transition-delay: 500ms;
  padding: 0;
  opacity: ${(props) => (props.canOpen || props.open ? 1 : 0)};
  display: ${(props) => (props.canOpen || props.open ? "flex" : "none")};
`;
