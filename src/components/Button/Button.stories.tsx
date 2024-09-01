import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { LuLogIn } from "react-icons/lu";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    radius: {
      description:
        "Defines the border-radius size of the input, determining how rounded the corners will be. Available options: `md` (medium), `lg` (large), `xl` (extra large), or `full` (completely rounded).",
    },
    variant: {
      description:
        "Defines the styling or mode which the `Button` Components will inherits to, default `solid`",
    },
    icon: {
      description:
        "Incase you want to add an icon to the `Button` Components `icon` props accepts jsx icons without the fragment e.g `icon={FaEmail}`",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
    size: "lg",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
    size: "lg",
  },
};

export const WithLoading: Story = {
  args: {
    children: "Button",
    size: "lg",
    isLoading: true,
    icon: LuLogIn,
  },
};
