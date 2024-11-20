import CodeBlock from "@/components/custom/code/CodeBlock";
import { menuCodes } from "@/data/codes/menu";
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
  TabHandle,
  Card,
  toast,
} from "secptrum-ui";

const MenuExample = () => {
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Menu>
            <MenuTrigger>
              <Button>Select Option</Button>
            </MenuTrigger>
            <MenuItem onClick={() => toast.info("Note archived")}>
              <RiArchive2Fill size={22} />
              <p>Archive note</p>
            </MenuItem>
            <MenuItem>
              <FiShare size={22} />
              <p>Share note</p>
            </MenuItem>
            <MenuItem>
              <FiEdit size={22} />
              <p>Edit note</p>
            </MenuItem>
            <MenuItem color="red" onClick={() => toast.success("Note deleted")}>
              <RiDeleteBinLine size={22} />
              <p>Delete note</p>
            </MenuItem>
          </Menu>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={menuCodes.ex} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default MenuExample;
