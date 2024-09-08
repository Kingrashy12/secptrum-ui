import type { Meta, StoryObj } from "@storybook/react";
import ScaleLoader from "./ScaleLoader";

const meta: Meta<typeof ScaleLoader> = {
  title: "Loader/ScaleLoader",
  component: ScaleLoader,
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
