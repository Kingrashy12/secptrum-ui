export const stackRef = [
  {
    prop: "children",
    type: "ReactNode",
    description: "The content or elements to be rendered within the stack.",
    default: "undefined",
  },
  {
    prop: "align",
    type: "string",
    description:
      "Defines how items align in relation to the layout axis. For `horizontal` align, items will stack side-by-side. For `vertical`, items will be stacked on top of each other.",
    default: "vertical",
  },
  {
    prop: "spacing",
    type: "SizeVariantType",
    description:
      "Controls the space between each element in the stack. The value can be based on predefined size variants.",
    default: "none",
  },
  {
    prop: "wrap",
    type: "boolean",
    description:
      "Enables wrapping for items if they exceed the available space in a row layout.",
    default: "false",
  },
];
