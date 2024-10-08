import React, { forwardRef, useEffect, useState } from "react";
import { Drop } from "../../styles/feedback/styled";
import { useTheme } from "../../context/useTheme";
import { getModeStyle } from "../../lib/helper/theme";

interface DropType {
  /**
   * The content to be rendered inside the drop component.
   */
  children?: React.ReactNode;

  /**
   * Additional CSS class names to apply to the drop component.
   */
  className?: string;

  /**
   * Inline styles to apply to the drop component.
   */
  style?: React.CSSProperties;

  /**
   * Indicates whether the drop component is currently open (visible) or not.
   */
  open: boolean;

  /**
   * Callback function triggered to close the drop component.
   */
  onClose: () => void;

  /**
   * Determines whether to center the content within the drop component.
   * @default true
   */
  centerContent?: boolean;
  /**
   * Determines the stack order of the backdrop, ensuring it appears above other content but behind interactive elements.
   */
  zIndex?: number;
  /**
   * Prevents the modal from closing if an action is in progress.
   * When set to `true`, the modal will remain open and cannot be closed
   * until the ongoing action completes.
   * Useful for preventing accidental closure during important tasks or loading states.
   */
  preventClose?: boolean;
  /**
   * Sets the theme mode for the input component.
   *
   * Options:
   * - `light` (default)
   * - `dark`
   * - Custom theme mode (override default styles)
   *
   * Allows developers to integrate with apps that support light/dark modes or provide a custom design.
   * @type {"light" | "dark"}
   */
  mode?: "light" | "dark";
  /**
   * Controls the intensity of the backdrop glass effect (blur).
   * A higher value increases the blur, creating a stronger glass effect.
   *
   * @type {number} - The intensity of the glass effect (blur).
   * @default Inherit from theme '6'
   */
  glassEffect?: number;
}

const Backdrop = forwardRef<HTMLDivElement, DropType>(
  (
    {
      open,
      onClose,
      children,
      className,
      style,
      centerContent = true,
      preventClose,
      mode,
      glassEffect,
    },
    ref
  ) => {
    const { mode: themeMode, theme } = useTheme();
    const [m, setM] = useState(mode);

    useEffect(() => {
      if (mode) {
        setM(mode);
      } else {
        setM(themeMode as DropType["mode"]);
      }
    }, [mode, themeMode]);

    const handleClose = (event: any) => {
      if (!preventClose && event.target === event.currentTarget) {
        onClose();
      }
    };

    const dropStyle = {
      background: getModeStyle(m as "light" | "dark")?.drop,
    };

    return (
      <Drop
        open={open}
        ref={ref}
        centerContent={centerContent}
        className={className}
        style={style}
        onClick={handleClose}
        background-color={dropStyle.background}
        theme={theme}
        glass-effect={glassEffect}
      >
        <> {children}</>
      </Drop>
    );
  }
);

export default Backdrop;
