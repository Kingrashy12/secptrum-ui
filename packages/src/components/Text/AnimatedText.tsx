import React from "react";
import { ParagraphProps, styled } from "styled-chroma";

type IStyleText = {
  animation: string;
  delay: number;
  infinite?: boolean;
};

const NameSpan = styled<IStyleText>("span")`
  display: inline-block;
  ${(props) =>
    props.infinite
      ? `
    animation: ${props.animation} 1s infinite ease-in-out forwards;
  `
      : `animation: ${props.animation} 1s ease-in-out forwards;`}
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0;
`;

interface AnimatedTextProps extends ParagraphProps {
  /**
   * The text to be animated.
   * @type {string}
   */
  text: string;

  /**
   * The animation type (e.g., 'fadeIn', 'dropIn', 'bounce').
   * Defines the type of animation to be applied.
   * @type {string}
   */
  animation: string;

  /**
   * Optional CSS class for each animated span element.
   * @type {string | undefined}
   */
  spanClass?: string;

  /**
   * Optional ID for each animated span element.
   * @type {string | undefined}
   */
  spanId?: string;

  /**
   * Optional inline styles for each animated span element.
   * Accepts any valid React CSS properties.
   * @type {React.CSSProperties | undefined}
   */
  spanStyle?: React.CSSProperties;
  /** If true, animation will run infinitely */
  infinite?: boolean;
}

/**
 * AnimatedText component that applies a given animation to each character
 * of the provided text. It splits the text into individual characters and
 * wraps each one in a `<span>`, which can be styled and animated.
 *
 * @param {string} text - The text to be animated, which will be split into individual characters.
 * @param {string} animation - The name of the animation to apply to each character (e.g., 'fadeIn', 'dropIn').
 * @param {string} [spanClass] - Optional CSS class to be applied to each character's span.
 * @param {string} [spanId] - Optional ID to be applied to each character's span.
 * @param {React.CSSProperties} [spanStyle] - Optional inline styles to be applied to each character's span.
 * @returns {JSX.Element} A JSX element that renders the animated text.
 */

const AnimatedText = React.forwardRef<HTMLParagraphElement, AnimatedTextProps>(
  (
    { text, animation, spanClass, spanId, spanStyle, infinite, ...props },
    ref
  ) => {
    return (
      <p {...props} ref={ref}>
        {text.split("").map((letter, index) => (
          <NameSpan
            key={index}
            delay={index * 0.1}
            animation={animation}
            className={spanClass}
            style={spanStyle}
            id={spanId}
            infinite={infinite}
          >
            {letter === " " ? "\u00A0" : letter}
          </NameSpan>
        ))}
      </p>
    );
  }
);

export default AnimatedText;
