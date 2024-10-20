export const menuCodes = {
  ex: `
import { FiEdit, FiShare } from "react-icons/fi";
import { RiArchive2Fill, RiDeleteBinLine } from "react-icons/ri";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
} from "secptrum-ui";

export const MenuExample = () => {
  return (
    <Menu>
      <MenuTrigger>
        <Button>Select Option</Button>
      </MenuTrigger>
        <MenuItem>
         <RiArchive2Fill size={25} />
          <p>Archive note</p>
         </MenuItem>
         <MenuItem>
          <FiShare size={25} />
          <p>Share note</p>
        </MenuItem>
        <MenuItem>
          <FiEdit size={25} />
          <p>Edit note</p>
        </MenuItem>
        <MenuItem color="red">
          <RiDeleteBinLine size={25} />
          <p>Delete note</p>
        </MenuItem>
    </Menu>
  );
};
    `,
  ex_user_banner: `
import { Divider } from "@/styles/global";
import React from "react";
import { FiEdit, FiShare } from "react-icons/fi";
import {
  HiDotsVertical,
  HiOutlineBookmark,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BodyText } from "@/styles/docs/start.styled";
import {
  Box,
  FlexBox,
  HoverableIcon,
  Menu,
  MenuItem,
  MenuTrigger,
} from "secptrum-ui";
import { useTheme } from "styled-chroma";

const john_doe =
  "https://onetentenhomes.com/wp-content/uploads/2020/04/team-placeholder.jpg";

export const MenuExample = () => {
 const { theme } = useTheme();
  return (
   <Box
    spacing="lg"
    direction="column"
    fullWidth
    marginTop="lg"
    border="1px solid $theme.colors?.divider"
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
  );
};
    `,
};
