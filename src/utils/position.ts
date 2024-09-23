import { ToastPositionType } from "../types/fun";
import { FloatProps } from "../components/Fab/Fab";

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
      return { bottom: `25px`, "align-self": "center" };
    case "top-center":
      return { top: `25px`, "align-self": "center" };
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