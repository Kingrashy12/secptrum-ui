/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import { DropSui } from '../../styles/feedback/styled';
import { useMode } from '../../hooks/useMode';

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
  mode?: 'light' | 'dark';
  /**
   * Controls the intensity of the backdrop glass effect (blur).
   * A higher value increases the blur, creating a stronger glass effect.
   *
   * @type {number} - The intensity of the glass effect (blur).
   * @default '6'
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
      glassEffect = 6,
      zIndex,
    },
    ref
  ) => {
    const { mode: themeMode } = useMode();
    const currentMode = mode ?? themeMode;

    const handleClose = (event: any) => {
      if (!preventClose && event.target === event.currentTarget) {
        onClose();
      }
    };

    const dropStyle = {
      background:
        currentMode === 'dark' ? 'rgb(0,0,0, 0.6)' : 'rgb(255, 255, 255, 0.5)',
    };

    return (
      <DropSui
        open={open}
        ref={ref}
        centerContent={centerContent}
        className={className}
        style={style}
        onClick={handleClose}
        backgroundColor={dropStyle.background}
        glassEffect={glassEffect}
        zIndex={zIndex}
      >
        <> {children}</>
      </DropSui>
    );
  }
);

export default Backdrop;
Backdrop.displayName = 'Backdrop';
