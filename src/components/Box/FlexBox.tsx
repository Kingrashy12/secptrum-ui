import { forwardRef } from "react";
import { DivProps, styled } from "styled-chroma";

export interface BoxProps extends DivProps {
  direction?: "row" | "column";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  gap?: string;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
  order?: number;
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  width?: string;
  height?: string;
}

/**
 * A flexible box component that extends the functionality of a standard div with flexbox properties.
 * This component allows for easy creation of flexible layouts with customizable flex properties.
 *
 * Props:
 * - `direction`: Sets the flex-direction. Options: "row" | "column". Default: "row".
 * - `wrap`: Sets the flex-wrap property. Options: "nowrap" | "wrap" | "wrap-reverse". Default: "nowrap".
 * - `justifyContent`: Aligns flex items along the main axis. Options: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly". Default: "flex-start".
 * - `alignItems`: Aligns flex items along the cross axis. Options: "flex-start" | "flex-end" | "center" | "baseline" | "stretch". Default: "stretch".
 * - `alignContent`: Aligns flex lines within the flex container. Options: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch". Default: "stretch".
 * - `gap`: Sets the gap between flex items. Default: "0".
 * - `alignSelf`: Overrides the alignItems value for the specific flex item. Options: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch". Default: "auto".
 * - `order`: Sets the order of the flex item. Default: 0.
 * - `flex`: Shorthand for flex-grow, flex-shrink and flex-basis combined. Default: 0.
 * - `flexGrow`: Sets how much the item will grow relative to the rest of the flexible items. Default: 0.
 * - `flexShrink`: Sets how much the item will shrink relative to the rest of the flexible items. Default: 0.
 * - `flexBasis`: Sets the initial main size of a flex item. Default: "auto".
 * - `width`: Sets the width of the flex container. Default: "auto".
 * - `height`: Sets the height of the flex container. Default: "auto".
 *
 * Usage:
 * Use the FlexBox component to create flexible layouts in your application.
 * It's particularly useful for creating rows, columns, and grid-like structures.
 *
 * Example:
 * ```
 * <FlexBox direction="row" justifyContent="space-between" alignItems="center" gap="10px">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </FlexBox>
 * ```
 */

const FlexBox = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...rest }, ref) => {
    return (
      <BoxContainer {...rest} ref={ref}>
        {children}
      </BoxContainer>
    );
  }
);

export default FlexBox;

FlexBox.displayName = "FlexBox";

const BoxContainer = styled<BoxProps>("div")`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  align-content: ${({ alignContent }) => alignContent || "stretch"};
  gap: ${({ gap }) => gap || "0"};
  align-self: ${({ alignSelf }) => alignSelf || "auto"};
  order: ${({ order }) => order || 0};
  flex: ${({ flex }) => flex || 0};
  flex-grow: ${({ flexGrow }) => flexGrow || 0};
  flex-shrink: ${({ flexShrink }) => flexShrink || 0};
  flex-basis: ${({ flexBasis }) => flexBasis || "auto"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;
