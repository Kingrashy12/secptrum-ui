import { keyframes } from "styled-chroma";

export const barload = keyframes`

    0% {
      width: 25%;
      left: 0;
      transform: translateX(-100%);
    }
    50% {
      width: 65%;
      left: 50%;
      transform: translateX(-50%);
    }
    100% {
      width: 25%;
      left: 100%;
      transform: translateX(0);
    }
`;

export const spin = keyframes`
 0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
