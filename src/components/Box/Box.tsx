import { BoxSui } from "../../styles/layout/styled";
import { BoxType } from "../../types/sui";
import { forwardRef } from "react";

/**
 * A flexible container component that serves as a building block for layout and styling.
 * The Box component allows you to easily control spacing (padding and margin), alignment,
 * borders, and other CSS properties through props.
 *
 * Props:
 * - `padding`: Sets the inner padding of the Box. Accepts any valid CSS padding value.
 * - `margin`: Sets the outer margin of the Box. Accepts any valid CSS margin value.
 * - `centered`: Boolean prop to center the content both vertically and horizontally.
 * - `border`: Defines the border style of the Box. Accepts any valid CSS border value.
 * - `paddingBottom`, `paddingLeft`, `paddingRight`, `paddingTop`: Controls the padding on specific sides.
 * - `marginBottom`, `marginLeft`, `marginRight`, `marginTop`: Controls the margin on specific sides.
 *
 * Usage:
 * Use the Box component as a wrapper or container to manage layout and spacing in your application.
 * It can be used to create consistent spacing, borders, and alignment throughout your UI.
 *
 * Example:
 * ```
 * <Box padding="16px" margin="8px" centered border="1px solid #ddd">
 *   <p>This is a content inside a Box component.</p>
 * </Box>
 * ```
 */

const Box = forwardRef<HTMLDivElement, BoxType>(
  ({ children, ...props }, ref) => {
    return (
      <BoxSui {...props} ref={ref} className={props.className}>
        {children}
      </BoxSui>
    );
  }
);

export default Box;

Box.displayName = "Box";
