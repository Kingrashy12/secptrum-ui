import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
import Button from "../Button/Button";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Display/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Button>Delete</Button>,
    title: "Delete",
  },
};
