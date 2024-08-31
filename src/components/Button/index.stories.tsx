import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    radius: {
      description: "The border radius size of the button",
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "full"],
      type: "string",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "The style variant of the button",
      control: { type: "select" },
      options: ["solid", "danger", "outline", "ghost"],
      type: "string",
      table: {
        defaultValue: { summary: "solid" },
      },
    },
    size: {
      description: "The size variant of the button",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      type: "string",
      table: {
        defaultValue: { summary: "md" },
        //   type:
      },
    },
    children: {
      description: "The text or content displayed inside the button",
      control: { type: "text" },
    },
    colorscheme: {
      description:
        'The color scheme for the button. This is a required argument; if not provided, it defaults to "primary", overriding any other color.',
      control: { type: "select" },
      options: ["primary", "danger"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    variant: "danger",
    colorscheme: "danger",
  },
};
