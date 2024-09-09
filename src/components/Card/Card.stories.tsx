import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { nunitoSans } from "../../styles/font";
import Products from "../../example/children/Card";

const meta: Meta<typeof Card> = {
  title: "UI/Layout/Card",
  component: Card,
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
    centerContent: {
      description: "An indication to center card content",
      type: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {
    children: <h1>This is a card content</h1>,
    style: { fontFamily: nunitoSans, fontSize: 15, alignItems: "center" },
  },
};

export const ProductCard: Story = {
  args: {
    children: <Products />,
    // centerContent: true,
  },
};
