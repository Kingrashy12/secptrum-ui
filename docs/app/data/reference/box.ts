export const sizeVariants =
  ' "md" | "lg" | "xl" | "sm" | "xs" | "2xl" | "3xl" | "4xl" | "5xl" ';

export const boxRef = [
  {
    prop: "padding",
    type: "string",
    description:
      "Sets the padding for all sides of the Box. Accepts any valid CSS padding value.",
    default: '""',
  },
  {
    prop: "paddingTop",
    type: sizeVariants,
    description:
      "Sets the top padding of the Box. Accepts predefined size variants.",
    default: '""',
  },
  {
    prop: "paddingBottom",
    type: sizeVariants,
    description:
      "Sets the bottom padding of the Box. Accepts predefined size variants.",
    default: '""',
  },
  {
    prop: "paddingLeft",
    type: sizeVariants,
    description:
      "Sets the left padding of the Box. Accepts predefined size variants.",
    default: '""',
  },
  {
    prop: "paddingRight",
    type: sizeVariants,
    description:
      "Sets the right padding of the Box. Accepts predefined size variants.",
    default: '""',
  },
  {
    prop: "margin",
    type: "string",
    description:
      "Sets the margin for all sides of the Box. Accepts any valid CSS margin value.",
    default: '""',
  },
  {
    prop: "marginTop",
    type: sizeVariants,
    description:
      "Sets the top margin of the Box. Accepts predefined size variants.",
    default: '""',
  },
  {
    prop: "marginBottom",
    type: sizeVariants,
    description:
      "Sets the bottom margin of the Box. Accepts predefined size variants.",
    default: '""',
  },
  {
    prop: "marginLeft",
    type: sizeVariants,
    description:
      "Sets the left margin of the Box. Accepts predefined size variants.",
    default: '""',
  },
  {
    prop: "marginRight",
    type: sizeVariants,
    description:
      "Sets the right margin of the Box. Accepts predefined size variants.",
    default: '""',
  },
  {
    prop: "border",
    type: "string",
    description:
      "Sets the border style for the Box. Accepts any valid CSS border value.",
    default: '""',
  },
  {
    prop: "centered",
    type: "boolean",
    description:
      "If true, centers the content both vertically and horizontally within the Box.",
    default: "false",
  },
  {
    prop: "direction",
    type: '"row" | "column"',
    description: "Specifies the flex direction of the Box.",
    default: "row",
  },
  {
    prop: "wrap",
    type: "boolean",
    description:
      "Enables wrapping for items if they exceed the available space in a row layout.",
    default: "false",
  },
  {
    prop: "spacing",
    type: sizeVariants,
    description:
      "Controls the spacing (gap) between child elements within the Stack component.",
    default: "sm",
  },
  {
    prop: "fullWidth",
    type: "boolean",
    description:
      "If true, the Box will take up the full width of its container.",
    default: "false",
  },
];
