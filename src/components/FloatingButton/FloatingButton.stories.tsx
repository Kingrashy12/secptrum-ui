import type { Meta, StoryObj } from "@storybook/react";
import FloatingButton from "./FloatingButton";
import { FaArrowUp } from "react-icons/fa6";
import Tooltip from "../Tooltip/Tooltip";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { CgMenuLeftAlt } from "react-icons/cg";

const meta: Meta<typeof FloatingButton> = {
  title: "UI/Display/FloatingButton",
  component: FloatingButton,
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
  tags: ["default"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollToTop: Story = {
  args: {
    children: (
      <Tooltip title="Scroll top" width="70px" position="top">
        <FaArrowUp color="white" size={20} />
      </Tooltip>
    ),
  },
};

export const DeleteAction: Story = {
  args: {
    children: (
      <Tooltip title="Delete account" width="90px" position="top">
        <RiDeleteBin3Fill color="white" size={20} />
      </Tooltip>
    ),
    position: "bottom-center",
    backgroundColor: "red",
  },
};

export const FixedMenu: Story = {
  args: {
    children: (
      <Tooltip title="Open menu" width="70px" position="bottom">
        <CgMenuLeftAlt color="white" size={20} />
      </Tooltip>
    ),
    position: "top-left",
  },
};
