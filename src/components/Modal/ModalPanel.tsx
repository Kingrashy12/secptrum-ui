import { useModalContext } from "../../context/useModalContext";
import { ModalPanel } from "../../styles/feedback/styled";
import React from "react";
import { StackType } from "../Stack/Stack";

export type ModalPanelType = {
  /**
   * Defines the size of the modal panel.
   * - "sm": Small panel.
   * - "md": Medium panel (default).
   * - "lg": Large panel.
   * - "xl": Extra large panel.
   * - "full": Full-screen panel.
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";

  /**
   * The content displayed within the modal panel.
   * Accepts any valid React nodes such as text, elements, or components.
   */
  children?: React.ReactNode;

  /**
   * Transition animation applied when the modal panel opens.
   * - "walkIn": Panel walks in smoothly from a direction.
   * - "dropIn": Panel drops down from the top.
   * - "slideIn": Panel slides in from the side.
   */
  transition?: "walkIn" | "dropIn" | "slideIn";
  /**
   * Optional string to add custom CSS classes.
   */
  className?: string;
  /**
   * Optional object to add custom inline styles.
   */
  style?: React.CSSProperties;
  backgroundColor?: string;
  /**
   * Specifies the alignment direction of the Stack component's children.
   * `vertical` for stacking items one above the other (column), `horizontal`
   * for stacking items side by side (row).
   */
  align?: StackType["align"];
};

const MPl = ({
  size = "lg",
  children,
  transition = "walkIn",
  className,
  style,
  backgroundColor,
  align = "vertical",
}: ModalPanelType) => {
  useModalContext();
  return (
    <ModalPanel
      className={className}
      style={style}
      transition={transition}
      size={size}
      align={align}
      background-color={backgroundColor}
    >
      {children}
    </ModalPanel>
  );
};

export default MPl;
