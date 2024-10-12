import {
  dropIn,
  dropOut,
  popIn,
  popOut,
  slideInFromRight,
  slideOutFromRight,
  walkIn,
  walkOut,
} from "../styles/animations";
import { ToastOptionsType } from "../types/sui";

const getToastTransition = (
  transition: ToastOptionsType["transition"],
  isVisible: boolean
) => {
  switch (transition) {
    case "walkIn":
      return `
        animation: ${isVisible ? walkIn : walkOut} 0.5s ease-out; 
        `;
    case "dropIn":
      return `
        animation: ${isVisible ? dropIn : dropOut} 0.5s ease-out;
        `;
    case "slideIn":
      return `
        animation: ${
          isVisible ? slideInFromRight : slideOutFromRight
        } 0.5s ease-out;
        `;
    case "popIn":
      return `
        animation: ${isVisible ? popIn : popOut} 0.5s ease-out; 
            `;
    default:
      return `
          animation:  ${isVisible ? walkIn : walkOut} 0.5s ease-out;
          `;
  }
};

export { getToastTransition };
