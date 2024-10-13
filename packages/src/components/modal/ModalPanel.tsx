import { useModalContext } from "../../context/useModal";
import { ModalPanelSui } from "../../styles/feedback/styled";
import React from "react";
import { StackType } from "../../types/sui";

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
  spacing?: StackType["spacing"];
};

const ModalPanel = ({
  size = "lg",
  children,
  transition = "walkIn",
  className,
  style,
  backgroundColor,
  align = "vertical",
  spacing,
}: ModalPanelType) => {
  const { isVisible } = useModalContext();
  return (
    <ModalPanelSui
      className={className}
      style={style}
      transition={transition}
      size={size}
      align={align}
      spacing={spacing}
      backgroundColor={backgroundColor}
      isVisible={isVisible}
    >
      {children}
    </ModalPanelSui>
  );
};

export default ModalPanel;
