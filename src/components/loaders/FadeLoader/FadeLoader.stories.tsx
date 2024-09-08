import type { Meta, StoryObj } from "@storybook/react";
import FadeLoader from "./FadeLoader";

const meta: Meta<typeof FadeLoader> = {
  title: "Loader/FadeLoader",
  component: FadeLoader,
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
