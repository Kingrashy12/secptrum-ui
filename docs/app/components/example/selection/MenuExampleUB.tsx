import CodeBlock from "@/components/custom/code/CodeBlock";
import Media from "@/components/custom/Media";
import { menuCodes } from "@/data/code/menu";
import { BodyText, Preview } from "@/styles/docs/start.styled";
import { Divider } from "@/styles/global";
import React from "react";
import { FiEdit, FiShare } from "react-icons/fi";
import {
  HiDotsVertical,
  HiOutlineBookmark,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  Box,
  FlexBox,
  HoverableIcon,
  Menu,
  MenuItem,
  MenuTrigger,
  TabPanel,
  Tabs,
  TabsHandle,
} from "secptrum-ui";
import { useTheme } from "styled-chroma";

const john_doe =
  "https://onetentenhomes.com/wp-content/uploads/2020/04/team-placeholder.jpg";

const MenuExampleUB = () => {
  const { theme } = useTheme();
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>
        <TabPanel>
          <Box
            spacing="lg"
            direction="column"
            fullWidth
            marginTop="lg"
            border={`1px solid ${theme.colors?.divider}`}
            padding="20px"
            style={{ borderRadius: 8 }}
          >
            <FlexBox justifyContent="space-between" alignItems="center">
              <Box spacing="lg" centered>
                <Media
                  src={john_doe}
                  width={40}
                  height={40}
                  style={{ borderRadius: 9999 }}
                />
                <p style={{ color: theme.colors?.text }}>John Doe</p>
              </Box>
              <Menu right={2} style={{ width: 150 }}>
                <MenuTrigger>
                  <HoverableIcon
                    icon={HiDotsVertical}
                    styles={{ cursor: "pointer" }}
                  />
                </MenuTrigger>
                <MenuItem>
                  <FiEdit size={25} />
                  <p>Edit post</p>
                </MenuItem>
                <MenuItem>
                  <FiShare size={25} />
                  <p>Share post</p>
                </MenuItem>
                <MenuItem>
                  <HiOutlineBookmark size={25} />
                  <p>Save post</p>
                </MenuItem>
                <MenuItem>
                  <HiQuestionMarkCircle size={25} />
                  <p>Report post</p>
                </MenuItem>
                <MenuItem color="red">
                  <RiDeleteBinLine size={25} />
                  <p>Delete post</p>
                </MenuItem>
              </Menu>
            </FlexBox>
            <Divider />
            <BodyText>Hello, world! This is my first post.</BodyText>
          </Box>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={menuCodes.ex_user_banner} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default MenuExampleUB;
