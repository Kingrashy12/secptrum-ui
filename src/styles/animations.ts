import { keyframes } from "styled-chroma";

export const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const zoom = keyframes`
    from {
      transform: scale(0.1);
    }
    to {
      transform: scale(1);
  }
`;

//*****Modal Animations */
export const slideIn = keyframes`
 from {
      transform: translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
`;

export const dropIn = keyframes`
   from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
`;
export const dropOut = keyframes`
   from {
      transform: translateY(0%);
      opacity: 1;
    }
    to {
      transform: translateY(-50%);
      opacity: 0;
    }
`;

export const walkIn = keyframes`
 from {
      scale: 0.2;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }  
`;
export const walkOut = keyframes`
 from {
      scale: 1;
      opacity: 1;
    }
    to {
      scale: 0.2;
      opacity: 0;
    }  
`;

export const slideInFromRight = keyframes`
 0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
`;
export const slideOutFromRight = keyframes`
 0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
    }
`;

export const popIn = keyframes`
  0% {
      transform: translateY(50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
`;
export const popOut = keyframes`
  0% {
      transform: translateY(0%);
      opacity: 1;
    }
    100% {
      transform: translateY(50%);
      opacity: 0;
    }
`;
