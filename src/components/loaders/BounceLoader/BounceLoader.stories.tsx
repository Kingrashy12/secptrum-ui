import type { Meta, StoryObj } from "@storybook/react";
import BounceLoader from "./BounceLoader";

const meta: Meta<typeof BounceLoader> = {
  title: "Loader/BounceLoader",
  component: BounceLoader,
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
