import { styled } from "styled-chroma";
import Typography from "./Typography";

type IStyleText = {
  animation: string;
  delay: number;
};

const NameSpan = styled<IStyleText>("span")`
  display: inline-block;
  animation: ${(props) => props.animation} 1s ease-in-out forwards;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0; /* Ensure opacity starts at 0 before animation */
`;

type AnimatedTextProps = {
  text: string;
  animation: string;
  className?: string;
};

const AnimatedText = ({ text, animation, className }: AnimatedTextProps) => {
  return (
    <Typography as="h1" font="nunito" className={className}>
      {text.split("").map((letter, index) => (
        <NameSpan key={index} delay={index * 0.1} animation={animation}>
          {letter === " " ? "\u00A0" : letter}
        </NameSpan>
      ))}
    </Typography>
  );
};

export default AnimatedText;
