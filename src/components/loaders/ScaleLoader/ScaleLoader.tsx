import styled from "styled-components";
import Box from "../../Box/Box";
import shouldForwardProp from "../../../utils/is-prop-valid";

type LoaderProps = {
  size?: number; // Base size of the circle
  color?: string; // Color of the circle
};

const ScaleLoader = ({ size = 50, color = "blue" }: LoaderProps) => {
  return (
    <Container size={size}>
      <Loader size={size} color={color} />
    </Container>
  );
};

export default ScaleLoader;

const Container = styled(Box).withConfig({ shouldForwardProp })<{
  size: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: ${(props) => props.size * 2}px; // Set the width of the container
  height: ${(props) => props.size * 2}px; // Set the height of the container
  border-radius: 50%; // Make the container circular
  overflow: hidden;
`;

// Loader styled component with animation
const Loader = styled.div.withConfig({ shouldForwardProp })<{
  size: number;
  color: string;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1); // Initial and final scale
      opacity: 0.8; // Initial and final opacity
    }
    50% {
      transform: scale(1.5); // Scale up in the middle of the animation
      opacity: 0.5; // Change opacity for a pulsing effect
    }
  }
`;
