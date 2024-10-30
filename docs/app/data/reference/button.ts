export const buttonRef = [
  {
    prop: "variant",
    type: "string",
    description: "Defines the button style variant",
    default: "solid",
  },
  {
    prop: "size",
    type: "string",
    description: "Defines the button size (medium, large, extra large)",
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
    type: "string",
    description:
      "Defines the border radius which the button will inherit (medium, large, extra large, full)",
    default: "xl",
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
    prop: "icon",
    type: "ReactNode",
    description: "Adds an icon to the button",
    default: "null",
  },
  {
    prop: "iconPosition",
    type: "string",
    description: "Defines the position of the icon (left, right)",
    default: "left",
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
    type: "'light' | 'dark'",
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
