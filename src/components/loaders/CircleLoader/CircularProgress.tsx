import React from "react";
import { styled, keyframes } from "styled-chroma";
import { colors } from "../../../styles/colors";

type CircularProgressProps = {
  /**
   * The size of the circular progress in pixels.
   * @default 50
   */
  size?: number;

  /**
   * The thickness of the circular progress line.
   * @default 4
   */
  thickness?: number;

  /**
   * The color of the circular progress.
   * @default colors.blue[600]
   */
  color?: string;
};

/**
 * CircularProgress component
 *
 * A customizable circular loading indicator.
 *
 * @component
 * @param {Object} props - The component props
 * @param {number} [props.size=50] - The size of the circular progress in pixels. default `50`
 * @param {number} [props.thickness=4] - The thickness of the circular progress line. default `4`
 * @param {string} [props.color=colors.blue[600]] - The color of the circular progress
 * @returns {React.ReactElement} A circular progress component
 *
 * @example
 * <CircularProgress size={60} thickness={3} color={colors.green[500]} />
 */

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 50,
  thickness = 4,
  color = colors.blue[600],
}) => {
  return (
    <SpinnerWrapper size={size}>
      <Spinner
        size={size}
        thickness={thickness}
        color={color}
        // viewBox="0 0 50 50"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* <circle cx="25" cy="25" r="20" fill="none" /> */}
        <circle cx={size / 2} cy={size / 2} r={size / 2 - 5} fill="none" />
      </Spinner>
    </SpinnerWrapper>
  );
};

export default CircularProgress;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 150;
    stroke-dashoffset: -15;
  }
  100% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: -120;
  }
`;

const SpinnerWrapper = styled<{ size: number }>("div")`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const Spinner = styled<{
  size: number;
  thickness: number;
  color: string;
}>("svg")`
  animation: ${rotate} 1.4s linear infinite;
  width: 100%;
  height: 100%;

  circle {
    stroke: ${(props) => props.color};
    stroke-width: ${(props) => props.thickness};
    stroke-linecap: round;
    animation: ${dash} 1.4s ease-in-out infinite;
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
`;
