import React, { useState } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import { ToastPositionType } from "../Toast/Toast";

type TooltipProps = {
  /**
   * The text or content that will be displayed inside the tooltip.
   */
  title: string;

  /**
   * Additional CSS class names to apply to the tooltip element.
   */
  className?: string;

  /**
   * Additional CSS class names to apply to the container of the tooltip.
   */
  containerClass?: string;

  /**
   * Inline styles to apply to the container of the tooltip.
   */
  containerStyle?: React.CSSProperties;

  /**
   * Inline styles to apply to the tooltip element.
   */
  style?: React.CSSProperties;

  /**
   * The position of the tooltip relative to its target element.
   * Can be "top" or "bottom".
   * @default "bottom"
   */
  position?: ToastPositionType | "bottom" | "top" | "left" | "right";

  /**
   * The width of the tooltip.
   */
  width?: string;

  /**
   * The child element that will trigger the tooltip on hover or focus.
   */
  children: React.ReactElement;
};

const getPosition = (position: TooltipProps["position"]) => {
  switch (position) {
    case "bottom":
      return { bottom: "-45px", "align-self": "center" };
    case "top":
      return { top: "-45px", "align-self": "center" };
    case "bottom-left":
      return { bottom: "-45px", left: "-70px" };
    case "top-left":
      return { top: "-45px", left: "-70px" };
    case "top-right":
      return { top: "-45px", right: "-70px" };
    case "bottom-right":
      return { bottom: "-45px", right: "-70px" };
    case "left":
      return { left: "-70px" };
    case "right":
      return { right: "-70px" };
  }
};

const Tooltip = ({
  width = "auto",
  position = "bottom",
  title,
  className,
  style,
  children,
  containerClass,
  containerStyle,
}: TooltipProps) => {
  const [showTip, setShowTip] = useState(false);

  function show() {
    setShowTip(true);
  }
  function hideTip() {
    setShowTip(false);
  }

  return (
    <Container
      className={containerClass}
      style={containerStyle}
      onMouseEnter={show}
      onMouseLeave={hideTip}
    >
      <Tip
        className={`tip ${className}`}
        width={width}
        position={position}
        show-tip={showTip}
        style={style}
      >
        <span>{title}</span>
      </Tip>
      {children}
    </Container>
  );
};

export default Tooltip;

const Container = styled(Box)`
  position: relative;
  height: auto;
  width: "100%";
  flex-direction: column;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;
const Tip = styled.div<{
  width: string;
  "show-tip": boolean;
  position: TooltipProps["position"];
}>`
  position: absolute;
  background: rgb(0, 0, 0, 0.8);
  color: white;
  width: ${(props) => props.width};
  padding: 5px;
  border-radius: 5px;
  display: ${(props) => (props["show-tip"] ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  ${(props) => getPosition(props.position)}
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  span {
    font-family: inherit;
    font-size: 13px;
  }
`;
