import type { Meta, StoryObj } from "@storybook/react";
import Stack from "./Stack";
import StackChild from "../../example/children/Stack";
import { colors } from "../../styles/colors";

const meta: Meta<typeof Stack> = {
  title: "Stack",
  component: Stack,
  parameters: {
    layout: "centered",
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
