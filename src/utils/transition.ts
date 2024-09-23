import { ToastOptionsType } from "../types/fun";

const getToastTransition = (transition: ToastOptionsType["transition"]) => {
  switch (transition) {
    case "walkIn":
      return `
        animation: walkIn 0.5s ease-out; 
        `;
    case "dropIn":
      return `
        animation: dropIn 0.5s ease-out;
        `;
    case "slideIn":
      return `
        animation: slideInFromRight 0.5s ease-out;
        `;
    case "popIn":
      return `
        animation: popIn 0.5s ease-out; 
            `;
    default:
      return `
          animation: walkIn 0.5s ease-out;
          `;
  }
};

export { getToastTransition };
