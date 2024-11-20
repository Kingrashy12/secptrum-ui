import { forwardRef } from "react";
import { StackType } from "../../types/sui";
import { StackSui } from "../../styles/layout/styled";

/**
 * A layout component that arranges its children in a vertical or horizontal stack with configurable spacing.
 */

const Stack = forwardRef<HTMLDivElement, StackType>(
  (
    {
      children,
      padding,
      spacing = "md",
      align = "vertical",
      margin,
      wrap,
      ...props
    },
    ref
  ) => {
    return (
      <StackSui
        {...props}
        ref={ref}
        align={align}
        padding={padding}
        spacing={spacing}
        margin={margin}
        className={props.className}
        wrap={wrap}
      >
        {children}
      </StackSui>
    );
  }
);

export default Stack;
Stack.displayName = "Sui.Stack";
