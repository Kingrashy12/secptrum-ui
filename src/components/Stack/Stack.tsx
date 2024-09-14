import React, { ComponentPropsWithRef } from "react";
import Box from "../Box/Box";
import styled from "styled-components";
import { spacingValues } from "../../utils/spacing";
import shouldForwardProp from "../../utils/is-prop-valid";

type StackProps = ComponentPropsWithRef<"div">;

interface StackType extends StackProps {
  children: React.ReactNode;
  /**
   * Defines the padding inside the Stack component.
   * Accepts any valid CSS padding value (e.g., "8px", "1rem", "10px 20px").
   */
  padding?: string;

  /**
   * Defines the margin outside the Stack component.
   * Accepts any valid CSS margin value (e.g., "8px", "1rem", "10px 20px").
   */
  margin?: string;

  /**
   * Specifies the alignment direction of the Stack component's children.
   * "vertical" for stacking items one above the other (column),
   * "horizontal" for stacking items side by side (row).
   */
  align?: "vertical" | "horizontal";

  /**
   * Controls the spacing (gap) between child elements within the Stack component.
   * Accepts predefined sizes: "sm" (small), "md" (medium), "lg" (large), "xl" (extra-large), "2xl" (2 times extra-large), "3xl" (3 times extra-large).
   */
  spacing?: SizeVariantType;
}

const StyledStack = styled(Box).withConfig({
  shouldForwardProp,
})<{
  spacing?: StackType["spacing"];
  align?: StackType["align"];
}>`
  flex-direction: ${(props) => (props.align === "vertical" ? "column" : "row")};
  height: 100%;
  gap: ${(props) => spacingValues(props.spacing)};
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 18px;
`;

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

const Stack = ({
  children,
  padding,
  spacing = "md",
  align = "vertical",
  margin,
  ...props
}: StackType) => {
  return (
    <StyledStack
      {...props}
      align={align}
      padding={padding}
      spacing={spacing}
      margin={margin}
      className={props.className}
    >
      {children}
    </StyledStack>
  );
};

export default Stack;
