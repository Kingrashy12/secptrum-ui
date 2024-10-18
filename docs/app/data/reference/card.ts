export const cardRef = [
  {
    prop: 'children',
    type: 'ReactNode',
    description:
      'The content to be rendered inside the card. This can include any JSX elements or components.',
    default: 'undefined',
  },
  {
    prop: 'centerContent',
    type: 'boolean',
    description:
      'Centers the content inside the card both horizontally and vertically if set to true',
    default: 'false',
  },
  {
    prop: 'backgroundColor',
    type: 'string',
    description:
      'A custom background color to override the default one. You can also use theme colors if needed.',
    default: 'Inherited from theme',
  },
  {
    prop: 'mode',
    type: 'string',
    description: 'Sets the theme mode for the card component.',
    default: 'light',
  },
  {
    prop: 'borderColor',
    type: 'string',
    description:
      'Specifies the border color for the card. If not provided, it defaults to the theme or no border.',
    default: 'Inherited from theme',
  },
  {
    prop: 'space',
    type: 'number',
    description:
      'Specifies gap between content inside the card. Can be used to adjust the internal spacing.',
    default: '16',
  },
];
