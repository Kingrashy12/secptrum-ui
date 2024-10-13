import React from "react";
import { keyframes, styled } from "styled-chroma";
import { colors } from "../../../styles/colors";

type ScaleLoaderProps = {
  size?: number;
  color?: string;
};

/**
 * ScaleLoader is a functional React component that displays a loading animation
 * using a series of bars that scale in height. The component is customizable
 * in terms of size and color.
 *
 * @component
 * @param {object} props - The properties for the ScaleLoader component.
 * @param {number} [props.size=20] - The size of the bars in pixels. Defaults to 20.
 * @param {string} [props.color=colors.blue[500]] - The background color of the bars.
 * @returns {JSX.Element} A styled loading animation with scaling bars.
 */

const ScaleLoader: React.FC<ScaleLoaderProps> = ({
  size = 20,
  color = colors.blue[500],
}) => {
  const scale = keyframes`
    0%{
      height: ${size}px;
    }50%{
      height: ${size + 16}px;
    }100%{
      height: ${size - 5}px;
    }
  `;

  return (
    <ScaleLoaderWrapper size={size} color={color} scale={scale}>
      <div />
      <div />
      <div />
      <div />
      <div />
    </ScaleLoaderWrapper>
  );
};

export default ScaleLoader;

interface IStyleLoader {
  color: string;
  size: number;
  scale: string;
}

const ScaleLoaderWrapper = styled<IStyleLoader>("div")`
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
  max-height: ${(props) => props.size + 5}px;

  div {
    background: ${(props) => props.color};
    width: ${(props) => props.size / 5}px;
    height: ${(props) => props.size}px;
    border-radius: 6px;
    animation: ${(props) => props.scale} 1s infinite ease;
  }

  div:nth-child(2) {
    animation-delay: -0.8s;
  }
  div:nth-child(3) {
    animation-delay: -0.7s;
  }
  div:nth-child(4) {
    animation-delay: -0.6s;
  }
  div:nth-child(5) {
    animation-delay: -0.5s;
  }
`;
