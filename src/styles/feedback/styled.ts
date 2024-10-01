import { ModalPanelType } from "../../components/modal/ModalPanel";
import { getPanelSize, getModalPanelTransition } from "../../utils/variant";
import styled from "styled-components";
import { getToastPosition } from "../../utils/position";
import { getToastTransition } from "../../utils/transition";
import shouldForwardProps from "../../utils/is-prop-valid";
import { colors } from "../colors";
import { getClassName } from "../../utils/helper/secptrum";

import { FixedBox } from "../global";
import {
  ToastOptionsType,
  ToastPositionType,
  ToastVariant,
} from "../../types/fun";
import { BoxSui } from "../layout/styled";

const shouldForwardProp = shouldForwardProps;

//************Backdrop Component**************//
// Backdrop style
export const Drop = styled(FixedBox).withConfig({ shouldForwardProp })<{
  open: boolean;
  centerContent: boolean;
  "background-color": string | any;
  "glass-effect": number | any;
}>`
  background: ${(props) => props["background-color"]};
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: ${(props) => props.centerContent && "center"};
  align-items: ${(props) => props.centerContent && "center"};
  backdrop-filter: ${(props) =>
    `blur(${props["glass-effect"] || props.theme.effects?.drop_blur}px)`};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;

Drop.defaultProps = {
  className: getClassName(Drop),
};

//****************Modal Components*************//
// Modal Panel
export const ModalPanel = styled.div.withConfig({ shouldForwardProp })<{
  size: ModalPanelType["size"];
  transition: ModalPanelType["transition"];
  "background-color": string | any;
}>`
  position: relative;
  background: ${(props) => props["background-color"] || "white"};
  border-radius: 11px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  padding: 20px;
  z-index: 1000;
  overflow: hidden;
  ${(props) => getPanelSize(props.size)};
  ${(props) => getModalPanelTransition(props.transition)}
  animation-fill-mode: forwards;
  animation-delay: 0s;
  display: flex;

  @keyframes slideIn {
    from {
      transform: translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }
  @keyframes dropIn {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  @keyframes walkIn {
    from {
      scale: 0.2;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;

ModalPanel.defaultProps = {
  className: getClassName(ModalPanel),
};

// Modal Title
export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme?.colors?.text || "black"};
  font-family: inherit;
`;

ModalTitle.defaultProps = {
  className: getClassName(ModalTitle),
};

// Modal Description
export const ModalContent = styled(BoxSui).withConfig({
  shouldForwardProp: (prop) => prop !== "space",
})<{ space?: number }>`
  margin: ${({ margin }) => margin || "5px 0"};
  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  border: ${({ border }) => border};
  flex-direction: ${(props) => props.direction || "column"};
  gap: ${(props) => props.space || 16}px;
  justify-content: ${(props) => props.centered && "center"};
  align-items: ${(props) => props.centered && "center"};
`;

ModalContent.defaultProps = {
  className: getClassName(ModalContent),
};

// Modal Footer
export const ModalFooter = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "space",
})<{ space?: number; position?: "right" | "left" }>`
  display: flex;
  justify-content: ${(props) =>
    props.position === "left" ? "flex-start" : "flex-end"};
  margin-top: 20px;
  padding-top: 10px;
  gap: ${(props) => props.space || 10}px;
`;

ModalFooter.defaultProps = {
  className: getClassName(ModalFooter),
};

//*****************Toast Components****************//
// Toast style
export const StyledToast = styled(BoxSui).withConfig({
  shouldForwardProp,
})<{
  position: ToastPositionType;
  "show-toast": boolean;
  transition: ToastOptionsType["transition"];
}>`
  background: white;
  width: auto;
  height: auto;
  border-radius: 6px;
  font-family: inherit;
  border: 1px solid ${colors.neutral[200]};
  gap: 5px;
  position: fixed;
  max-width: 400px;
  ${(props) => getToastPosition(props.position)}
  display: ${(props) => (props["show-toast"] ? "flex" : "none")};
  ${(props) => getToastTransition(props.transition)}
  z-index: 1000;

  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes dropIn {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  @keyframes popIn {
    0% {
      transform: translateY(50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  @keyframes walkIn {
    0% {
      scale: 0.1;
      opacity: 0;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }

  .header {
    font-weight: 600;
    color: black;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  span {
    font-weight: 500;
    color: ${colors.neutral[600]};
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    max-width: 90%;
  }
`;

StyledToast.defaultProps = {
  className: getClassName(StyledToast),
};

export const ContentWrap = styled(BoxSui)`
  padding: 12px;
  gap: 8px;
  width: fit-content;
`;

export const ToastContent = styled(BoxSui)`
  gap: 2px;
  width: 90%;
`;

export const CloseIcon = styled(BoxSui).withConfig({
  shouldForwardProp,
})<{ type: ToastVariant | "warning" }>`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${colors.neutral[200]};
  padding: 12px;
  height: auto;
  transition: all;
  transition-duration: 100ms;
  transition-delay: 100ms;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  &:hover {
    background: ${colors.slate[100]};
    transition: all;
    transition-duration: 100ms;
    transition-delay: 100ms;
  }

  svg {
    padding: 4px;
  }
`;
