import React from "react";
import styled from "styled-components";
type LoaderProps = {
  /**
   * The size of each circle in the loader. Defaults to `16`.
   */
  size?: number;
  /**
   * The color of each circle the loader in the loader. Defaults to `blue`.
   */
  color?: string;
};

/**
 * Props:
 *  - `size`:  The size of each circle in the loader. Defaults to `40`.
 *  - `color`: The color of each circle the loader in the loader. Defaults to `blue`.
 *
 *Usage example:
 * ```
 * <StretchLoader size={25} color='green' />
 * ```
 */
const PulseLoader = ({ color = "blue", size = 16 }: LoaderProps) => {
  const StretchContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      box-sizing: border-box;
    }
    div {
      display: inline-block;
      position: absolute;
      left: 8px;
      width: ${size}px;
      background: ${color};
      animation: stretch_ 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    div:nth-child(1) {
      left: 8px;
      animation-delay: -0.24s;
    }
    div:nth-child(2) {
      left: 32px;
      animation-delay: -0.12s;
    }
    div:nth-child(3) {
      left: 56px;
      animation-delay: 0s;
    }
    @keyframes stretch_ {
      0% {
        top: 8px;
        height: 64px;
      }
      50%,
      100% {
        top: 24px;
        height: 32px;
      }
    }
  `;
  return (
    <StretchContainer>
      <div></div>
      <div></div>
      <div></div>
    </StretchContainer>
  );
};

export default PulseLoader;
