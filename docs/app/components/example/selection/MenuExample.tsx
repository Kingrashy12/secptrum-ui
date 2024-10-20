import CodeBlock from "@/components/custom/code/CodeBlock";
import { menuCodes } from "@/data/code/menu";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import { FiEdit, FiShare } from "react-icons/fi";
import { RiArchive2Fill, RiDeleteBinLine } from "react-icons/ri";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  TabPanel,
  Tabs,
  TabsHandle,
  toast,
} from "secptrum-ui";

const MenuExample = () => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>
        <TabPanel>
          <Menu>
            <MenuTrigger>
              <Button>Select Option</Button>
            </MenuTrigger>
            <MenuItem onClick={() => toast.info("Note archived")}>
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
            <MenuItem color="red" onClick={() => toast.success("Note deleted")}>
              <RiDeleteBinLine size={25} />
              <p>Delete note</p>
            </MenuItem>
          </Menu>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={menuCodes.ex} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default MenuExample;
