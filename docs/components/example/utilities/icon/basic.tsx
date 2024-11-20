import CodeBlock from "../../../custom/code/CodeBlock";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { Card, Icon, Stack, TabHandle, TabPanel, Tabs } from "secptrum-ui";

const code = `
import { Icon } from "secptrum-ui";
import { FaHeart } from "react-icons/fa6";

const BasicIcon = () => (
  <Icon
   icon={FaHeart}
   color="tomato"
   size={25}
   />
);
`;

const BasicIcon = () => {
  return (
    <Card fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Icon icon={FaHeart} color="tomato" size={25} />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default BasicIcon;
