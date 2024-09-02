import type { Meta, StoryObj } from "@storybook/react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      type: "string",
      description:
        "Indicates the style which the Input Components will inherits to, default `solid`",
    },
    icon: {
      description:
        "`icon` Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons. Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.",
    },
    radius: {
      type: "string",
      description:
        "Defines the border-radius size of the input, determining how rounded the corners will be. Available options: `sm` (small), `md`` (medium), `lg` (large), `xl` (extra large), or `full` (completely rounded).",
    },
    Type: {
      type: "string",
      description:
        "Specifies the type of input to render. Determines the kind of data that the input will handle. Possible values: `password` (for password input), `text` (for generic text), `email` (for email addresses), or `file` (for file uploads).",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
  },
};

export const Outline: Story = {
  args: {
    placeholder: "Enter your name",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    placeholder: "Enter your name",
    variant: "ghost",
  },
};

export const FullRadiusWithIcon: Story = {
  args: {
    placeholder: "Enter your email",
    variant: "solid",
    radius: "full",
    icon: HiOutlineMail,
    Type: "email",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter your password",
    Type: "password",
    value: "password",
  },
};
