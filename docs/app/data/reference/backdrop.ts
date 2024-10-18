export const backdropRef = [
  {
    prop: 'open*',
    type: 'boolean',
    description: 'Determines whether the backdrop is visible or hidden',
    default: 'false',
  },
  {
    prop: 'onClose*',
    type: 'function',
    description: 'Function triggered when backdrop is clicked or dismissed',
    default: 'undefined',
  },
  {
    prop: 'children',
    type: 'ReactNode',
    description: 'The content to be displayed within the backdrop',
    default: 'undefined',
  },
  {
    prop: 'className',
    type: 'string',
    description:
      'Allows you to apply a custom CSS class to the Backdrop. Use this prop to add additional styling or override default styles.',
    default: 'undefined',
  },
  {
    prop: 'mode',
    type: 'string',
    description: 'Sets the theme mode for the backdrop component.',
    default: 'light',
  },
  {
    prop: 'zIndex',
    type: 'number',
    description:
      'Determines the stack order of the backdrop, ensuring it appears above other content but behind interactive elements.',
    default: '500',
  },
  {
    prop: 'glassEffect',
    type: 'number',
    description:
      'Controls the intensity of the backdrop glass effect (blur). A higher value increases the blur, creating a stronger glass effect.',
    default: '6',
  },
  {
    prop: 'style',
    type: 'object',
    description:
      'Provides a way to apply inline styles to the Backdrop. This prop accepts an object where you can specify any valid CSS properties.',
    default: 'undefined',
  },
  {
    prop: 'centerContent',
    type: 'boolean',
    description: 'Centers the content within the backdrop',
    default: 'true',
  },
];
