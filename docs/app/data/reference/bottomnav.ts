export const bottomnavRef = [
  {
    prop: "variant",
    type: "string",
    description: "Determines the variant of the bottom navigation bar.",
    default: "full",
  },
  {
    prop: "background",
    type: "string",
    description:
      "Determines the background color of the bottom navigation bar.",
    default: "black",
  },
  {
    prop: "children*",
    type: "ReactNode",
    description:
      "The content to be displayed within the bottom navigation bar.",
    default: "null",
  },
];

export const bottomnavTabRef = [
  {
    prop: "title",
    type: "string",
    description: "The title to be displayed within the bottom navigation bar.",
    default: '""',
  },
  {
    prop: "icon*",
    type: "React.ElementType",
    description: "The icon to be displayed within the bottom navigation bar.",
    default: "null",
  },
  {
    prop: "activeColor",
    type: "string",
    description:
      "The color to be displayed when the bottom navigation bar is active.",
    default: "colors.blue[500]",
  },
  {
    prop: "inactiveColor",
    type: "string",
    description:
      "The color to be displayed when the bottom navigation bar is inactive.",
    default: "colors.gray[500]",
  },
  {
    prop: "href*",
    type: "string",
    description: "The URL to navigate to when the tab is clicked",
    default: "#",
  },
  {
    prop: "iconSize",
    type: "number",
    description:
      "The size of the icon to be displayed within the bottom navigation bar.",
    default: "24",
  },
  {
    prop: "useDotOnActive",
    type: "boolean",
    description:
      "Determines if text is to be replaced with a dot when the tab is active",
    default: "false",
  },
  {
    prop: "preventPush",
    type: "boolean",
    description:
      "Prevents the tab from navigating to the specified href when clicked.",
    default: "false",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "Indicates if the tab is disabled and cannot be clicked.",
    default: "false",
  },
  {
    prop: "onClick",
    type: "()=>void",
    description:
      "A callback function that is executed when preventPush is set to true. This function is intended to handle the navigation logic when the default navigation behavior is prevented.",
    default: "()=>{}",
  },
  {
    prop: "padding",
    type: "string",
    description: "Determines the padding of the bottom navigation bar.",
    default: "0.2rem",
  },
];
