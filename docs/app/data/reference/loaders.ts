export const circleloaderRef = [
  {
    prop: 'size',
    type: 'number',
    description: 'Specifies the size (diameter) of the loader in pixels.',
    default: '50',
  },
  {
    prop: 'color',
    type: 'string',
    description:
      'Sets the color of the loader. Accepts any valid color (hex, rgb, or theme-based value).',
    default: 'blue',
  },
  {
    prop: 'containerColor',
    type: 'string',
    description:
      "Sets the background color of the loader's container. Accepts any valid color value.",
    default: 'colors.blue[100]',
  },
];

export const barloaderRef = [
  {
    prop: 'height',
    type: 'number | string',
    description: 'Sets the height of the bar loader.',
    default: '4',
  },
  {
    prop: 'color',
    type: 'string',
    description:
      'Sets the color of the loader. Accepts any valid color (hex, rgb).',
    default: 'colors.blue[500]',
  },
  {
    prop: 'width',
    type: 'number | string',
    description:
      'Sets the width of the bar loader. This can be a number or a string, when using string dont include px',
    default: '100',
  },
  {
    prop: 'rounded',
    type: 'boolean',
    description: 'Determines whether the bar loader has rounded edges.',
    default: 'false',
  },
];

export const circularProgressRef = [
  {
    prop: 'size',
    type: 'number',
    description: 'Specifies the size (diameter) of the loader in pixels.',
    default: '50',
  },
  {
    prop: 'color',
    type: 'string',
    description:
      'Sets the color of the loader. Accepts any valid color (hex, rgb, or theme-based value).',
    default: 'colors.blue[500]',
  },
  {
    prop: 'thickness',
    type: 'number',
    description: 'Sets the thickness of the loader.',
    default: '4',
  },
];

export const pulseLoaderRef = [
  {
    prop: 'size',
    type: 'number',
    description: 'Specifies the size (diameter) of the loader in pixels.',
    default: '50',
  },
  {
    prop: 'color',
    type: 'string',
    description:
      'Sets the color of the loader. Accepts any valid color (hex, rgb, or theme-based value).',
    default: 'colors.blue[500]',
  },
];

export const scaleLoaderRef = [
  {
    prop: 'size',
    type: 'number',
    description: 'Specifies the size (diameter) of the loader in pixels.',
    default: '20',
  },
  {
    prop: 'color',
    type: 'string',
    description:
      'Sets the color of the loader. Accepts any valid color (hex, rgb, or theme-based value).',
    default: 'colors.blue[500]',
  },
];
