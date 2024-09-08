import type { Meta, StoryObj } from "@storybook/react";
import CircleRollerLoader from "./CircleRollerLoader";

const meta: Meta<typeof CircleRollerLoader> = {
  title: "Loader/CircleRollerLoader",
  component: CircleRollerLoader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {},
};
