export const buttonRef = [
  {
    prop: "variant",
    type: '"solid" | "ghost" | "danger"',
    description: "Defines the button style variant",
    default: "solid",
  },
  {
    prop: "size",
    type: '"md" | "lg" | "xl"',
    description: "Defines the button size",
    default: "md",
  },
  {
    prop: "width",
    type: "string",
    description:
      "Specifies the width of the button. If provided, it sets the button’s width to the specified value.",
    default: "auto",
  },
  {
    prop: "radius",
    type: '"md" | "lg" | "xl" | "full"',
    description: "Defines the border radius which the button will inherit",
    default: "lg",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "Disables the button",
    default: "false",
  },
  {
    prop: "isLoading",
    type: "boolean",
    description: "Shows a loading state on the button",
    default: "false",
  },
  {
    prop: "rightIcon",
    type: "JSX.Element",
    description: "An icon element displayed on the side side of the Button",
    default: "null",
  },
  {
    prop: "leftIcon",
    type: "JSX.Element",
    description: "An icon element displayed on the left side of the Button",
    default: "null",
  },
  {
    prop: "backgroundColor",
    type: "string",
    description: "The background color of the button",
    default: "default",
  },
  {
    prop: "color",
    type: "string",
    description: "Sets the custom text color",
    default: "default",
  },
  {
    prop: "fullWidth",
    type: "boolean",
    description:
      "If true, the button will take up the full width of its container.",
    default: "false",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "Sets the theme mode for the button component.",
    default: "light",
  },
  {
    prop: "outlineBorderColor",
    type: "string",
    description: "The border style for the button when in outline variant",
    default: "default",
  },
  {
    prop: "onHoverBackground",
    type: "string",
    description: "The background color of the button when hovered.",
    default: "colors.blue[600]",
  },
];
