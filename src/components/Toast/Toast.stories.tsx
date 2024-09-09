import type { Meta, StoryObj } from "@storybook/react";
import Toaster from "./Toaster";
import {
  ErrorToast,
  InfoToast,
  SuccessToast,
} from "../../example/children/Toast";

const meta: Meta<typeof Toaster> = {
  title: "UI/Feedback/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
  tags: ["default"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    children: <InfoToast />,
    isStory: true,
  },
};
export const Error: Story = {
  args: {
    children: <ErrorToast />,
    isStory: true,
  },
};
export const Success: Story = {
  args: {
    children: <SuccessToast />,
    isStory: true,
  },
};
