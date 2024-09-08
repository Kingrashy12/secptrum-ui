import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import ModalWrap from "../../example/children/modal/ModalWrap";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
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

export const Docs: Story = {
  args: {},
};

export const Confirmation: Story = {
  args: {
    children: <ModalWrap />,
    isStory: true,
  },
};
