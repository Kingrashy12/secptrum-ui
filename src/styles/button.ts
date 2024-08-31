import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "w-full",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      /**
       * Defines the styling variants for the `Button`.
       * @property {string} solid - A solid button style with no additional classes.
       * @property {string} danger - A button style with a border and transition effects, indicating a danger or alert action.
       * @property {string} outline - A button style with a border outline.
       * @property {string} ghost - A button style with a transparent background and transition effects.
       */
      variant: {
        solid: "",
        danger: "border-2 transition-colors duration-300",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      /**
       * Defines the size variants for the `Button`.
       * @property {string} sm - A small button size with smaller padding and text.
       * @property {string} md - A medium button size with standard padding and text.
       * @property {string} lg - A large button size with larger padding and text.
       */
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      /**
       * Defines the color scheme for the `Button`.
       * @property {string} primary - The primary color scheme, applying a white text color. (Required: Defaults to "primary" if not provided, which will override any other color)
       * @property {string} danger - The danger color scheme, applying a red text color for alert or destructive actions.
       */
      colorscheme: {
        primary: "text-white",
        danger: "text-danger-500",
      },
      /**
       * Defines the border radius options for the `Button`.
       * @property {string} sm - A small border radius.
       * @property {string} md - A medium border radius.
       * @property {string} lg - A large border radius.
       * @property {string} xl - An extra-large border radius.
       * @property {string} full - A fully rounded border (circular).
       */
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "danger",
        colorscheme: "danger",
        className:
          "bg-transparent border-danger-500 text-danger-500 hover:bg-danger-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
      radius: "md",
    },
  }
);
