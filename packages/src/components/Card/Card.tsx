import { forwardRef, useMemo } from "react";
import { CardSui } from "../../styles/layout/styled";
import { CardProps } from "../../types/sui";
import { useMode } from "../../hooks/useMode";

/**
 * Card component for displaying content in a styled container.
 */

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, mode, direction = "column", ...rest }, ref) => {
    const { mode: modeContext } = useMode();

    const currentMode = useMemo(() => mode ?? modeContext, [mode, modeContext]);

    return (
      <CardSui
        {...rest}
        mode={currentMode as CardProps["mode"]}
        direction={direction}
        ref={ref}
      >
        {children}
      </CardSui>
    );
  }
);

export default Card;
Card.displayName = "Sui.Card";
