export const modalRef = [
  {
    prop: 'open*',
    type: 'string',
    description: 'Boolean indicating whether the modal is open.',
    default: 'false',
  },
  {
    prop: 'onClose*',
    type: '()=>void',
    description:
      'A function that is triggered when the modal needs to be closed.',
    default: '()=>{}',
  },
  {
    prop: 'preventClose',
    type: 'boolean',
    description: 'Prevents the modal from closing if an action is in progress.',
    default: 'false',
  },
  {
    prop: 'zIndex',
    type: 'number',
    description:
      'Determines the stack order of the backdrop, ensuring it appears above other content but behind interactive elements.',
    default: '500',
  },
  {
    prop: 'mode',
    type: "'light' | 'dark'",
    description: 'Sets the theme mode for the backdrop component.',
    default: 'light',
  },
  {
    prop: 'glassEffect',
    type: 'number',
    description: 'Controls the intensity of the backdrop glass effect',
    default: '6',
  },
];

export const modalPanelRef = [
  {
    prop: 'size',
    type: 'string',
    description: 'Determines the width of the modal.',
    default: 'lg',
  },
  {
    prop: 'transition',
    type: 'string',
    description:
      'Optional transition animation, Options (walkIn, slideIn, dropIn)',
    default: 'walkIn',
  },
  {
    prop: 'className',
    type: 'string',
    description: 'Optional string to add custom CSS classes.',
    default: "''",
  },
  {
    prop: 'style',
    type: 'CSSProperties',
    description: 'Optional object to add custom inline styles.',
    default: '{}',
  },
];

export const modalTitleRef = [
  {
    prop: 'title*',
    type: 'string',
    description: 'String representing the modal title.',
    default: "''",
  },
  {
    prop: 'showClose',
    type: 'boolean',
    description: 'Optional boolean to show/hide the close icon',
    default: 'false',
  },
  {
    prop: 'onClose',
    type: '()=>void',
    description: 'Optional function to call when the close button is clicked.',
    default: '()=>{}',
  },
  {
    prop: 'preventClose',
    type: 'boolean',
    description: 'Prevents the modal from closing if an action is in progress.',
    default: 'false',
  },
  {
    prop: 'showBorder',
    type: 'boolean',
    description: 'Adds border-bottom to the component.',
    default: 'true',
  },
  {
    prop: 'iconClass',
    type: 'string',
    description: 'Optional string for custom classname for the close icon.',
    default: "''",
  },
  {
    prop: 'iconSize',
    type: 'number',
    description: 'Optional number for the size of the close icon',
    default: '25',
  },
  {
    prop: 'titleClassName',
    type: 'string',
    description: 'Optional string for custom class names for the title.',
    default: "''",
  },
];

export const modalContentRef = [
  {
    prop: 'children',
    type: 'ReactNode',
    description: 'Content to display within the modal.',
    default: 'null',
  },
];

export const modalFooterRef = [
  {
    prop: 'position',
    type: 'string',
    description: 'Specifies the alignment of the footer content.',
    default: 'right',
  },
  {
    prop: 'space',
    type: 'number',
    description: 'Optional gap size between content',
    default: '10',
  },
  {
    prop: 'showBorder',
    type: 'boolean',
    description: 'Adds border-top to the component.',
    default: 'true',
  },
];
