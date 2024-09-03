import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import ModalWrap from "../../example/children/modal/ModalWrap";

const meta: Meta<typeof ModalWrap> = {
  title: "Modal",
  component: ModalWrap,
  parameters: {
    layout: "centered",
  },
  tags: ["default"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
