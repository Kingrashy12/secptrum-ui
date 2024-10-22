import { styled } from 'styled-chroma';
import Typography from './Typography';

type IStyleText = {
  animation: string;
  delay: number;
  infinite?: boolean;
};

const NameSpan = styled<IStyleText>('span')`
  display: inline-block;
  ${(props) =>
    props.infinite
      ? `
    animation: ${props.animation} 1s infinite ease-in-out forwards;
  `
      : `animation: ${props.animation} 1s ease-in-out forwards;`}
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0; /* Ensure opacity starts at 0 before animation */
`;

type AnimatedTextProps = {
  text: string;
  animation: string;
  className?: string;
  infinite?: boolean;
};

const AnimatedText = ({
  text,
  animation,
  className,
  infinite,
}: AnimatedTextProps) => {
  return (
    <Typography as="h1" font="nunito" className={className}>
      {text.split('').map((letter, index) => (
        <NameSpan
          key={index}
          delay={index * 0.1}
          infinite={infinite}
          animation={animation}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </NameSpan>
      ))}
    </Typography>
  );
};

export default AnimatedText;
