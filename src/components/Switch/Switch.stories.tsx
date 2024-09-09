import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "UI/Input/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // children: {
    //   control: { disable: true },
    // },
    // isStory: {
    //   control: { disable: true },
    // },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {},
};
