import type { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";
import BoxChild from "../../example/children/Box";

const meta: Meta<typeof Box> = {
  title: "UI/Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    padding: {
      type: "string",
      description:
        "Specifies the padding inside the component. Accepts any valid CSS padding value (e.g., '8px', '1rem', '10px 20px').",
    },
    margin: {
      type: "string",
      description:
        "Specifies the margin outside the component. Accepts any valid CSS margin value (e.g., '8px', '1rem', '10px 20px').",
    },
    centered: {
      type: "boolean",
      description:
        "Determines whether the content is centered within the component. When true, centers content both horizontally and vertically.",
    },
    border: {
      type: "string",
      description:
        "Defines the border of the component. Accepts any valid CSS border value (e.g., '1px solid #000', '2px dashed red').",
    },
    paddingBottom: {
      type: "string",
      description:
        "Specifies the bottom padding of the component. Accepts any valid CSS padding value.",
    },
    paddingLeft: {
      type: "string",
      description:
        "Specifies the left padding of the component. Accepts any valid CSS padding value.",
    },
    paddingRight: {
      type: "string",
      description:
        "Specifies the right padding of the component. Accepts any valid CSS padding value.",
    },
    paddingTop: {
      type: "string",
      description:
        "Specifies the top padding of the component. Accepts any valid CSS padding value.",
    },
    marginBottom: {
      type: "string",
      description:
        "Specifies the bottom margin of the component. Accepts any valid CSS margin value.",
    },
    marginLeft: {
      type: "string",
      description:
        "Specifies the left margin of the component. Accepts any valid CSS margin value.",
    },
    marginRight: {
      type: "string",
      description:
        "Specifies the right margin of the component. Accepts any valid CSS margin value.",
    },
    marginTop: {
      type: "string",
      description:
        "Specifies the top margin of the component. Accepts any valid CSS margin value.",
    },
  },

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {
    children: <BoxChild />,
  },
};
