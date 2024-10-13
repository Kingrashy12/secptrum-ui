import { forwardRef, useEffect, useState } from "react";
import { CardSui } from "../../styles/layout/styled";
import { CardProps } from "../../types/sui";
import { useTheme } from "styled-chroma";

/**
 * Card component for displaying content in a styled container.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the card.
 * @param {CardProps['mode']} [props.mode] - The visual mode of the card ('light' or 'dark'). If not provided, it uses the theme mode.
 * @param {'row' | 'column'} [props.direction='column'] - The direction of the card's content layout. defaults to `column`
 * @param {string} [props.width] - The width of the card.
 * @param {boolean} [props.fullWidth] - Whether the card should take up the full width of its container.
 * @param {string} [props.background] - The background color of the card.
 * @param {string} [props.borderColor] - The border color of the card.
 * @param {string} [props.boxShadow] - The box shadow of the card.
 * @param {string} [props.space] - The spacing between child elements in the card.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the card's root element.
 * @returns {React.ReactElement} The rendered Card component.
 */

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, mode, direction = "column", ...rest }, ref) => {
    const { mode: themeMode } = useTheme();
    const [m, setM] = useState(mode);

    useEffect(() => {
      if (mode) {
        setM(mode);
      } else {
        setM(themeMode as CardProps["mode"]);
      }
    }, [mode, themeMode]);

    return (
      <CardSui {...rest} mode={m} direction={direction} ref={ref}>
        {children}
      </CardSui>
    );
  }
);

export default Card;
Card.displayName = "CardSui";
