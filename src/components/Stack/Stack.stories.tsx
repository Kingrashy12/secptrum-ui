import type { Meta, StoryObj } from "@storybook/react";
import Stack from "./Stack";
import StackChild from "../../example/children/Stack";
import { colors } from "../../styles/colors";

const meta: Meta<typeof Stack> = {
  title: "UI/Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
    style: {
      control: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {
    children: <StackChild />,
    style: {
      background: "white",
      width: 300,
      borderRadius: 9,
      border: `1px solid ${colors.neutral200}`,
    },
  },
};
