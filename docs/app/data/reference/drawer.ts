export const drawerRef = [
  {
    prop: 'open*',
    type: 'boolean',
    description: 'Determines if the drawer is open.',
    default: 'false',
  },
  {
    prop: 'onClose*',
    type: '() => void',
    description: 'Function to be called when the drawer is closed.',
    default: '() => {}',
  },
  {
    prop: 'width',
    type: 'string',
    description: 'The width of the drawer.',
    default: '500px',
  },
  {
    prop: 'position',
    type: 'string',
    description: 'The position of the drawer.',
    default: 'right',
  },
  {
    prop: 'variant',
    type: 'string',
    description: 'The variant of the drawer.',
    default: 'default',
  },
  {
    prop: 'background',
    type: 'string',
    description: 'The background color of the drawer.',
    default: '#fff',
  },
  {
    prop: 'mode',
    type: 'string',
    description: 'The mode of the drawer.',
    default: 'light',
  },
  {
    prop: 'spacing',
    type: 'number',
    description: 'The spacing of the drawer.',
    default: '6',
  },
  {
    prop: 'header',
    type: 'React.ReactNode',
    description: "The content to be rendered in the drawer's header.",
    default: 'null',
  },
  {
    prop: 'preventClose',
    type: 'boolean',
    description:
      'If true, prevents the drawer from being closed when clicking outside.',
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
    prop: 'className',
    type: 'string',
    description: 'Additional CSS classes to be applied to the drawer.',
    default: '""',
  },
  {
    prop: 'style',
    type: 'React.CSSProperties',
    description: 'Additional CSS styles to be applied to the drawer.',
    default: '{}',
  },
  {
    prop: 'glassEffect',
    type: 'number',
    description: 'The intensity of the glass effect on the drawer.',
    default: '0',
  },
];
