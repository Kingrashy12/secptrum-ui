import { forwardRef } from "react";
import { StackType } from "../../types/sui";
import { StackSui } from "../../styles/layout/styled";

/**
 * A layout component that arranges its children in a vertical or horizontal stack with configurable spacing.
 * The Stack component simplifies the management of child components' spacing, alignment, and direction.
 *
 * Props:
 * - `spacing`: Controls the space (gap) between child elements.
 *    Accepts predefined sizes: "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl".
 * - `align`: Specifies the direction of the stack.
 * - `padding`: Sets the inner padding of the Stack. Accepts any valid CSS padding value.
 * - `margin`: Sets the outer margin of the Stack. Accepts any valid CSS margin value.
 * - `align`: Aligns children elements. "vertical" for centering items in a column, "horizontal" for centering items in a row.
 * - `centered`: Boolean prop to center the content of the Stack within its container.
 *
 * Usage:
 * Use the Stack component to align and space multiple child elements consistently.
 * It is especially useful for creating vertical or horizontal lists, menus, toolbars, and other grouped UI elements.
 *
 * Example:
 * ```
 * <Stack align="vertical" spacing="md" padding="16px">
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 *   <Button>Button 3</Button>
 * </Stack>
 * ```
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
Stack.displayName = "Stack";
