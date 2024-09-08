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
