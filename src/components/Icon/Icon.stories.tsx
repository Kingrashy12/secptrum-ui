import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import { colors } from "../../styles/colors";
import { AiFillHome } from "react-icons/ai";

const meta: Meta<typeof Icon> = {
  title: "UI/Display/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      description:
        "`icon` Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {
    icon: AiFillHome,
    size: 30,
    color: colors.blue500,
  },
};
