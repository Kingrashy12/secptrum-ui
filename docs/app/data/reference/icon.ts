export const iconRef = [
  {
    prop: "icon*",
    type: "JSX.Element",
    description:
      "Accepts a JSX element representing an icon, such as icon={FaUser}",
    default: "undefined",
  },
  {
    prop: "size",
    type: "number",
    description: "Size of the icon, this accepts only number",
    default: "default",
  },
  {
    prop: "className",
    type: "string",
    description: "Custom class name for the icon",
    default: "undefined",
  },
  {
    prop: "color",
    type: "string",
    description: "Color of the icon",
    default: "black",
  },
  {
    prop: "onClick",
    type: "() => void",
    description: "Click event handler",
    default: "undefined",
  },
  {
    prop: "onMouseEnter",
    type: "() => void",
    description: "Mouse enter event handler",
    default: "null",
  },
  {
    prop: "onMouseLeave",
    type: "() => void",
    description: "Mouse leave event handler",
    default: "null",
  },
  {
    prop: "styles",
    type: "CSSProperties",
    description: "Custom styles for the icon",
    default: "{}",
  },
  {
    prop: "title",
    type: "string",
    description: "Title of the icon if any",
    default: '""',
  },
];
