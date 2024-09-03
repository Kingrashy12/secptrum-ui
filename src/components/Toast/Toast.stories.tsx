import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
