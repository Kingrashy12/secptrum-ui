import { buttonStyles } from "@/styles/button";
import { ButtonProps } from "@/types";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";

const Button = ({
  className,
  children,
  radius,
  variant,
  size,
  colorscheme,
  ...props
}: ButtonProps & VariantProps<typeof buttonStyles>) => {
  return (
    <button
      className={`${cn(buttonStyles({ variant, size, colorscheme, radius }))} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
