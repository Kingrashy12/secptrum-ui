export const pickerRef = [
  {
    prop: "onImageSelect",
    type: "(image: string) => void",
    description: "Callback function triggered when a single image is selected.",
    default: "Required",
  },
  {
    prop: "onMultipleImageSelect",
    type: "(images: string[]) => void",
    description:
      "Callback function triggered when multiple images are selected.",
    default: "Optional",
  },
  {
    prop: "multiple",
    type: "boolean",
    description: "Allows selecting multiple images.",
    default: "false",
  },
  {
    prop: "containerStyles",
    type: "React.CSSProperties",
    description: "Custom styles for the image container.",
    default: "None",
  },
  {
    prop: "imageStyles",
    type: "React.CSSProperties",
    description: "Custom styles for the selected image.",
    default: "None",
  },
  {
    prop: "pickerStyles",
    type: "React.CSSProperties",
    description: "Custom styles for the image picker area.",
    default: "None",
  },
  {
    prop: "imageRemoverStyles",
    type: "React.CSSProperties",
    description: "Custom styles for the image remover button.",
    default: "None",
  },
  {
    prop: "containerClassName",
    type: "string",
    description: "Custom class name for the image container.",
    default: "None",
  },
  {
    prop: "imageClassName",
    type: "string",
    description: "Custom class name for the selected image.",
    default: "None",
  },
  {
    prop: "pickerClassName",
    type: "string",
    description: "Custom class name for the image picker.",
    default: "None",
  },
  {
    prop: "imageRemoverClass",
    type: "string",
    description: "Custom class name for the image remover button.",
    default: "None",
  },
  {
    prop: "removeIconSize",
    type: "number",
    description: "Size of the remove icon for the selected image.",
    default: "25",
  },
  {
    prop: "isPickerOpen*",
    type: "boolean",
    description: "Controls whether the image picker is open.",
    default: "false",
  },
  {
    prop: "autoSelectImage",
    type: "boolean",
    description: "Automatically selects an image if one is available.",
    default: "false",
  },
  {
    prop: "mode",
    type: "'light' | 'dark'",
    description:
      "Determines the appearance mode of the picker (light or dark).",
    default: "light",
  },
  {
    prop: "closePicker*",
    type: "() => void",
    description: "Function to manually close the image picker.",
    default: "Required",
  },
];
