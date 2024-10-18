export const fabRef = [
  {
    prop: 'onClick',
    type: 'void',
    description: 'Callback function triggered on click.',
    default: 'undefined',
  },
  {
    prop: 'size',
    type: 'string',
    description: "Size of the Fab (e.g., 'md','lg','xl').",
    default: 'md',
  },
  {
    prop: 'position',
    type: 'string',
    description:
      "Determines where the Fab should appear: 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'.",
    default: 'bottom-right',
  },
  {
    prop: 'mode',
    type: 'string',
    description: 'Sets the theme mode for the fab component.',
    default: 'light',
  },
  {
    prop: 'colorScheme',
    type: 'string',
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
