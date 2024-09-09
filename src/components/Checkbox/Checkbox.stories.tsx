import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import CheckBox from "../../example/children/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Input/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
    isStory: {
      control: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {
    rounded: true,
    isStory: true,
    children: <CheckBox />,
  },
};
