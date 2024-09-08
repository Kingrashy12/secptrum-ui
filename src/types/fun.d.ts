declare type SizeVariantType =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";
declare type ToastVariant = "info" | "error" | "success";
declare type ToastPositionType =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

declare type ToastType = {
  [key in ToastVariant]: (
    message: string,
    options?: { position?: ToastPositionType; className?: string }
  ) => void;
};

declare type ToastOptionsType = {
  position?: ToastPositionType;
  className?: string;
};
