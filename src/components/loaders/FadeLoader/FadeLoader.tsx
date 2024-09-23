import React from "react";
import shouldForwardProp from "../../../utils/is-prop-valid";
import styled from "styled-components";

type LoaderProps = {
  /**
   * The size of each circle in the loader. Defaults to `40`.
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
 * <FadeLoader size={25} color='green' />
 * ```
 */

const FadeLoader = ({ color = "blue", size = 40 }: LoaderProps) => {
  return (
    <StyledFade size={size} color={color}>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledFade>
  );
};

export default FadeLoader;

const StyledFade = styled.div.withConfig({ shouldForwardProp })<{
  size: number;
  color: string;
}>`
  .lds-spinner,
  .lds-spinner div,
  .lds-spinner div:after {
    box-sizing: border-box;
  }
  .lds-spinner {
    color: ${(props) => props.color};
    display: inline-block;
    position: relative;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3.2px;
    left: 36.8px;
    width: 6.4px;
    height: 17.6px;
    border-radius: 20%;
    background: ${(props) => props.color};
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
