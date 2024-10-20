import { keyframes } from "styled-chroma";

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

export const dropIn = keyframes`
  from {
    transform: translateY(-50px); 
    opacity: 0; 
  }
  to {
    transform: translateY(0); 
    opacity: 1; 
  }
`;
