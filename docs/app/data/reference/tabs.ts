export const tabsRef = [
  {
    prop: "variant",
    type: "string",
    description:
      "The visual style variant for the tab list, either line or solid",
    default: "line",
  },
  {
    prop: "mode",
    type: "'light' | 'dark'",
    description: "Sets the theme mode for the button component.",
    default: "light",
  },
  {
    prop: "fullWidth",
    type: "boolean",
    description: "Determines whether the Tabs should stretch to full width.",
    default: "false",
  },
  {
    prop: "className",
    type: "string",
    description: "A custom class name to apply to the TabsList component.",
    default: "undefined",
  },
  {
    prop: "backgroundColor",
    type: "string",
    description: "Sets the background color of the TabsList.",
    default: "colors.gray[100]",
  },
  {
    prop: "lineBorderColor",
    type: "string",
    description: "Sets the color of the line border on line variant.",
    default: "colors.neutral[200]",
  },
];

export const tabsHandleRef = [
  {
    prop: "activeColor",
    type: "string",
    description: "The color to be applied when the tab is active.",
    default: "black",
  },
  {
    prop: "inActiveColor",
    type: "string",
    description: "The color to be applied when the tab is inactive.",
    default: "colors.neutral[400]",
  },
  {
    prop: "activeSolidColor",
    type: "string",
    description:
      "The color to be applied when the tab is active on solid variant.",
    default: "blue",
  },
  {
    prop: "value",
    type: "string",
    description:
      "The unique identifier or value for the tab, typically used to track the selected tab.",
    default: "''",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "If true, disables the tab, preventing interaction.",
    default: "false",
  },
  {
    prop: "className",
    type: "string",
    description: "Optional additional CSS class for styling the TabsHandle.",
    default: "''",
  },
  {
    prop: "icon",
    type: "React.ElementType",
    description: "Accepts a JSX element representing an icon.",
    default: "null",
  },
  {
    prop: "iconSize",
    type: "number",
    description: "The size of the icon in number.",
    default: "16",
  },
];
