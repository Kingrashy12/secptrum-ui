import React from "react";
import Box from "../../Box/Box";
import styled from "styled-components";
import Stack from "../../Stack/Stack";

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
  const Loader = styled(Stack)``;

  const Square = styled.div`
    padding: 5px;
    background-color: ${color};
    width: ${size}px;
    height: ${size}px;
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

  return (
    <Loader align="horizontal">
      <Square />
      <Square />
      <Square />
    </Loader>
  );
};

export default BounceLoader;
