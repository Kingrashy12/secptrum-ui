import { forwardRef } from "react";
import { FloatProps } from "../../types/sui";
import { FabSui } from "../../styles/action/styled";

const Fab = forwardRef<HTMLDivElement, FloatProps>(
  (
    {
      position = "bottom-right",
      children,
      backgroundColor,
      size = "md",
      disabled,
      colorScheme = "primary",
      variant = "solid",
      moveOnScroll,
      zIndex,
      ...props
    },
    ref
  ) => {
    return (
      <FabSui
        {...props}
        ref={ref}
        className={props.className}
        backgroundcolor={backgroundColor}
        position={position}
        colorScheme={colorScheme}
        disabled={disabled}
        variant={variant}
        size={size}
        moveOnScroll={moveOnScroll}
        zIndex={zIndex}
      >
        {children}
      </FabSui>
    );
  }
);

export default Fab;
Fab.displayName = "Sui.FabSui";
