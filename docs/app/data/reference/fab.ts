export const fabRef = [
  {
    prop: 'onClick',
    type: 'void',
    description: 'Callback function triggered on click.',
    default: 'undefined',
  },
  {
    prop: 'size',
    type: '"md" | "lg" | "xl" ',
    description: 'Size of the Fab.',
    default: 'md',
  },
  {
    prop: 'position',
    type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
    description: 'Determines where the Fab should be positioned.',
    default: 'bottom-right',
  },
  {
    prop: 'mode',
    type: '"light" | "dark"',
    description: 'Sets the theme mode for the fab component.',
    default: 'light',
  },
  {
    prop: 'colorScheme',
    type: '"primary" | "secondary" | "danger"',
    description: 'Theme color scheme for the Fab background.',
    default: 'primary',
  },
  {
    prop: 'moveOnScroll',
    type: 'boolean',
    description: 'Enables the Fab to move or stay fixed when scrolling.',
    default: 'false',
  },
  {
    prop: 'variant',
    type: 'string',
    description: "Visual variant of the Fab (e.g., 'light','solid').",
    default: 'solid',
  },
  {
    prop: 'zIndex',
    type: 'number',
    description:
      'Determines the stack order of the Fab, ensuring it appears above other content but behind interactive elements.',
    default: '400',
  },
  {
    prop: 'disabled',
    type: 'boolean',
    description: 'Disables the Fab, preventing user interaction.',
    default: 'false',
  },
  {
    prop: 'backgroundColor',
    type: 'string',
    description:
      'Background color for the Fab to overide the default background.',
    default: 'undefined',
  },
];
