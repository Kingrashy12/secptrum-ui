export const toastRef = [
  {
    prop: 'type',
    type: '"success" | "error" | "info" | "warning"',
    description: 'Specifies the type of toast notification to display.',
    default: '() => void',
  },
  {
    prop: 'position',
    type: '"top-right" | "top-left" | "bottom-right" | "bottom-left"',
    description: 'The position where the toast should appear on the screen.',
    default: 'top-right',
  },
  {
    prop: 'transition',
    type: '"dropIn" | "slideIn" | "popIn" | "walkIn"',
    description: "The animation transition effect for the toast's appearance.",
    default: 'walkIn',
  },
  {
    prop: 'className',
    type: 'string',
    description: 'Additional CSS class name to be applied to the toast.',
    default: 'undefined',
  },
];
