export const switchRef = [
  {
    prop: "color",
    type: "string",
    description: "The background color of the switch when it is not checked.",
    default: "colors.neutral[300]",
  },
  {
    prop: "checkedColor",
    type: "string",
    description: "The background color of the switch when it is checked.",
    default: "blue",
  },
  {
    prop: "size",
    type: "string",
    description:
      "The size of the switch, determining its width and height. Options: 'md' (medium), 'lg' (large).",
    default: "md",
  },
  {
    prop: "onSwitch*",
    type: "function",
    description: "Callback function triggered when the switch is toggled.",
    default: "undefined",
  },
  {
    prop: "checked*",
    type: "boolean",
    description:
      "Indicates whether the switch is currently checked (on) or not (off).",
    default: "false",
  },
  {
    prop: "disabled",
    type: "boolean",
    description:
      "Disables the switch when set to true, preventing user interaction.",
    default: "false",
  },
  {
    prop: "className",
    type: "string",
    description: "Optional class name for custom styling.",
    default: "undefined",
  },
];
