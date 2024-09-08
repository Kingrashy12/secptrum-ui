import type { Meta, StoryObj } from "@storybook/react";
import CircleLoader from "./CircleLoader";

const meta: Meta<typeof CircleLoader> = {
  title: "Loader/CircleLoader",
  component: CircleLoader,
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
