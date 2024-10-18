export const checkboxRef = [
  {
    prop: 'checked*',
    type: 'boolean',
    description: 'Determines whether the checkbox is checked.',
    default: 'false',
  },
  {
    prop: 'onCheck*',
    type: 'function',
    description: 'Callback function for checkbox state changes.',
    default: 'undefined',
  },
  {
    prop: 'size',
    type: 'number',
    description: 'Defines the size of the checkbox.',
    default: '20',
  },
  {
    prop: 'disabled',
    type: 'boolean',
    description:
      'Disables the checkbox if set to true, preventing user interaction.',
    default: 'false',
  },
  {
    prop: 'className',
    type: 'string',
    description:
      'Optional className for custom styling of the checkbox component.',
    default: 'undefined',
  },
  {
    prop: 'borderColor',
    type: 'string',
    description: 'Specifies the border color of the checkbox.',
    default: 'colors.neutral[300]',
  },
  {
    prop: 'color',
    type: 'string',
    description:
      'Sets the color of the checkbox. Accepts any valid CSS color string.',
    default: 'blue',
  },
  {
    prop: 'rounded',
    type: 'boolean',
    description: 'Specifies whether the checkbox should have rounded corners.',
    default: 'false',
  },
];
