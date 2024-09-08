import type { Meta, StoryObj } from "@storybook/react";
import PulseLoader from "./PulseLoader";

const meta: Meta<typeof PulseLoader> = {
  title: "Loader/PulseLoader",
  component: PulseLoader,
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
