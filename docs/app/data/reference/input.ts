export const inputRef = [
  {
    prop: 'icon',
    type: 'ReactElement',
    description:
      "Accepts a JSX element representing an icon, such as 'icon={FaUser}' from react-icons.",
    default: 'null',
  },
  {
    prop: 'variant',
    type: 'string',
    description:
      'Indicates the style which the Input Components will inherits to',
    default: 'outline',
  },
  {
    prop: 'radius',
    type: 'string',
    description:
      'Defines the border-radius size of the input, determining how rounded the corners will be.',
    default: 'lg',
  },
  {
    prop: 'Type',
    type: 'string',
    description:
      "Specifies the type of input to render. Determines the kind of data that the input will handle. Possible values: 'password', 'text', 'email', or 'number'.",
    default: 'text',
  },
  {
    prop: 'fullWidth',
    type: 'boolean',
    description:
      'If true, the Textinput will take up the full width of its container.',
    default: 'false',
  },
  {
    prop: 'iconSize',
    type: 'number',
    description: 'The size of the icon.',
    default: '19',
  },
  // {
  //   prop: "outLineBorderColor",
  //   type: "string",
  //   description: "The color of the outline border.",
  //   default: "Inherit from theme",
  // },
  {
    prop: 'focusColor',
    type: 'string',
    description: 'The color of the input when focused.',
    default: 'Inherit from theme',
  },
  // {
  //   prop: "focusBorderColor",
  //   type: "string",
  //   description: "The color of the border when the input is focused.",
  //   default: "Inherit from theme",
  // },
  {
    prop: 'hasError',
    type: 'boolean',
    description: 'Indicates if the input is in an error state.',
    default: 'false',
  },
  {
    prop: 'errorMessage',
    type: 'string',
    description:
      'The error message to display when the input is in an error state.',
    default: 'undefined',
  },
  {
    prop: 'width',
    type: 'string',
    description: "Specifies the width of the input, e.g., '100%' or '250px'.",
    default: 'auto',
  },
  {
    prop: 'mode',
    type: 'string',
    description:
      'Sets the theme mode for the input component. Options:`light`, `dark`',
    default: 'light',
  },
  {
    prop: 'formClassName',
    type: 'string',
    description:
      'Additional class name to apply to the form container element.',
    default: 'undefined',
  },
  {
    prop: 'formStyle',
    type: 'Object',
    description: 'Inline styles to apply to the form container.',
    default: 'undefined',
  },
  {
    prop: 'formStyle',
    type: 'Object',
    description: 'Inline styles to apply to the input element.',
    default: 'undefined',
  },
  {
    prop: 'inputClass',
    type: 'string',
    description: 'Additional class name to apply to the input element.',
    default: 'undefined',
  },
  // {
  //   prop: "backgroundColor",
  //   type: "string",
  //   description: "The background color for the input field.",
  //   default: "Inherit from theme",
  // },
  // {
  //   prop: "solidVariantHoverColor",
  //   type: "string",
  //   description:
  //     "Override the default hover background color for the 'solid' variant.",
  //   default: "Inherit from theme",
  // },
  // {
  //   prop: "ghostVariantHoverColor",
  //   type: "string",
  //   description:
  //     "Override the default hover background color for the 'ghost' variant.",
  //   default: "Inherit from theme",
  // },
];
