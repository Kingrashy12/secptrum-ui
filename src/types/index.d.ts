import { ComponentPropsWithRef } from "react";

type ButtonType = ComponentPropsWithRef<"button">;

declare interface ButtonProps extends ButtonType {
  className?: string;
  children: string;
}
