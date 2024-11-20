import CodeBlock from "../../../custom/code/CodeBlock";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Card, Icon, Stack, TabHandle, TabPanel, Tabs } from "secptrum-ui";

const code = `
import { Icon } from "secptrum-ui";
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

const DynamicIcons = () => (
 const [isFavorite, setIsFavorite] = useState(false);
  <Icon
    icon={isFavorite ? FaHeart : FaRegHeart}
    styles={{ cursor: "pointer" }}
    color="red"
    onClick={() => setIsFavorite(!isFavorite)}
    size={25}
   />
);
`;

const DynamicIcons = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Card fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Icon
              icon={isFavorite ? FaHeart : FaRegHeart}
              styles={{ cursor: "pointer" }}
              color="red"
              onClick={() => setIsFavorite(!isFavorite)}
              size={25}
            />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default DynamicIcons;
