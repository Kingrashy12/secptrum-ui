import { forwardRef } from "react";
import { DropSui } from "../../styles/feedback/styled";
import { useMode } from "../../hooks/useMode";
import { DropType } from "../../types/sui";

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
        currentMode === "dark" ? "rgb(0,0,0, 0.6)" : "rgb(255, 255, 255, 0.5)",
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
Backdrop.displayName = "Sui.Backdrop";
