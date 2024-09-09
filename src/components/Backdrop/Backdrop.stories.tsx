import type { Meta, StoryObj } from "@storybook/react";
import Backdrop from "./Backdrop";
import LoadingBackdrop from "../../example/children/backdrop/Backdrop";

const meta: Meta<typeof Backdrop> = {
  title: "UI/Feedback/Backdrop",
  component: Backdrop,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <LoadingBackdrop />,
    isStory: true,
  },
};
