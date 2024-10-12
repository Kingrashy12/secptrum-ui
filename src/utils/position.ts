import { FloatProps, ToastPositionType } from "../types/sui";

export const getFloatPosition = (position: FloatProps["position"]) => {
  switch (position) {
    case "top-right":
      return { top: `25px`, right: `35px` };
    case "top-left":
      return { top: `25px`, left: `35px` };
    case "bottom-right":
      return { bottom: `25px`, right: `35px` };
    case "bottom-left":
      return { bottom: `25px`, left: `35px` };
    case "bottom-center":
      return { bottom: `25px`, left: `50%` };
    case "top-center":
      return { top: `25px`, right: `50%` };
  }
};

// Toast

export const getToastPosition = (position: ToastPositionType) => {
  switch (position) {
    case "top-right":
      return { top: `15px`, right: `15px` };
    case "top-left":
      return { top: `15px`, left: `15px` };
    case "bottom-right":
      return { bottom: `15px`, right: `15px` };
    case "bottom-left":
      return { bottom: `15px`, left: `15px` };
  }
};
