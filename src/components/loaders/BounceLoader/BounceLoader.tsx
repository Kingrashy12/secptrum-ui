import React from "react";
import Box from "../../Box/Box";
import styled from "styled-components";
import Stack from "../../Stack/Stack";
import shouldForwardProp from "../../../utils/is-prop-valid";

type LoaderProps = {
  /**
   * The size of each circle in the loader. Defaults to `15`.
   */
  size?: number;
  /**
   * The color of each circle the loader in the loader. Defaults to `blue`.
   */
  color?: string;
};

/**
 * Props:
 *  - `size`:  The size of each circle in the loader. Defaults to `15`.
 *  - `color`: The color of each circle the loader in the loader. Defaults to `blue`.
 *
 *Usage example:
 * ```
 * <BounceLoader size={25} color='green' />
 * ```
 */

const BounceLoader = ({ size = 15, color = "blue" }: LoaderProps) => {
  return (
    <Loader align="horizontal">
      <Square size={size} color={color} />
      <Square size={size} color={color} />
      <Square size={size} color={color} />
    </Loader>
  );
};

export default BounceLoader;

const Loader = styled(Stack)``;

const Square = styled.div.withConfig({ shouldForwardProp })<{
  size: number;
  color: string;
}>`
  padding: 5px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 9999px;
  /* box-shadow: 2px 2px 2px black; */
  filter: drop-shadow(2px 2px 2px black);

  &:nth-child(1) {
    animation: bounce 1s infinite linear;
  }
  &:nth-child(2) {
    animation: bounce 1s infinite linear;
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation: bounce 1s infinite linear;
    animation-delay: 0.5s;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
      opacity: 0.5;
    }
  }
`;
