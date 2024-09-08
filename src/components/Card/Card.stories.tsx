import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { nunitoSans } from "../../styles/font";

const meta: Meta<typeof Card> = {
  title: "UI/Layout/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h1>This is a card content</h1>,
    style: { fontFamily: nunitoSans, fontSize: 15, alignItems: "center" },
  },
};
