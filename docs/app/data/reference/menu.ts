export const menuRef = [
  {
    prop: "children",
    type: "ReactNode",
    description: "Menu content, typically menu items.",
    default: "null",
  },
  {
    prop: "className",
    type: "string",
    description: "Optional CSS class name to apply to the menu.",
    default: '""',
  },
  {
    prop: "style",
    type: "React.CSSProperties",
    description: "Optional inline styles to apply to the menu.",
    default: "{}",
  },
  {
    prop: "open",
    type: "boolean",
    description: "Flag indicating whether the menu is initially open.",
    default: "false",
  },
  {
    prop: "mode",
    type: "'light' | 'dark'",
    description: "Theme mode, either light or dark.",
    default: "'light'",
  },
  {
    prop: "zIndex",
    type: "number",
    description: "Z-index value for positioning the menu.",
    default: "100",
  },
  {
    prop: "top",
    type: "number",
    description: "Top position value (e.g., pixels).",
    default: "undefined",
  },
  {
    prop: "left",
    type: "number",
    description: "Left position value (e.g., pixels).",
    default: "undefined",
  },
  {
    prop: "right",
    type: "number",
    description: "Right position value (e.g., pixels).",
    default: "undefined",
  },
  {
    prop: "bottom",
    type: "number",
    description: "Bottom position value (e.g., pixels).",
    default: "undefined",
  },
];

export const menuItemsRef = [
  {
    prop: "children",
    type: "ReactNode",
    description: "Menu item content, typically text or an icon.",
    default: "null",
  },
  {
    prop: "className",
    type: "string",
    description: "Optional CSS class name to apply to the menu item.",
    default: '""',
  },
  {
    prop: "id",
    type: "string",
    description: "Unique identifier for the MenuItem.",
    default: "undefined",
  },
  {
    prop: "style",
    type: "React.CSSProperties",
    description: "Optional inline styles to apply to the menu item.",
    default: "{}",
  },
  {
    prop: "space",
    type: "number",
    description: "Spacing between menu items (e.g., 6).",
    default: "0.25rem",
  },
  {
    prop: "color",
    type: "string",
    description: "Text color (e.g., #000, rgba(0, 0, 0, 1)).",
    default: "#000",
  },
  {
    prop: "mode",
    type: "'light' | 'dark'",
    description: "Theme mode, either light or dark.",
    default: "'light'",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "Indicates if the MenuItem is disabled.",
    default: "false",
  },
  {
    prop: "onClick",
    type: "()=>void",
    description: "Function to be called when the MenuItem is clicked.",
    default: "undefined",
  },
];
