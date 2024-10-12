import React from "react";
import { styled, keyframes } from "styled-chroma";
import { colors } from "../../../styles/colors";

type PulseLoaderProps = {
  size?: number;
  color?: string;
};

const PulseLoader: React.FC<PulseLoaderProps> = ({
  size = 50,
  color = colors.blue[600],
}) => {
  return (
    <SpinnerContainer size={size}>
      <Pulse color={color} />
    </SpinnerContainer>
  );
};

export default PulseLoader;
PulseLoader.displayName = "PulseLoaderSui";

const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const SpinnerContainer = styled<{ size: number }>("div")`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
`;

const Pulse = styled<{ color: string }>("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: 0.6;
  animation: ${pulse} 1s ease-out infinite;
`;
