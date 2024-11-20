import CodeBlock from "../../../custom/code/CodeBlock";
import React from "react";
import {
  HiChatBubbleOvalLeftEllipsis,
  HiMiniArrowLongRight,
  HiMiniTrash,
} from "react-icons/hi2";
import { Button, Card, Stack, TabPanel, Tabs, TabHandle } from "secptrum-ui";

const code = `
import { Button, Stack } from 'secptrum-ui';
import {
  HiChatBubbleOvalLeftEllipsis,
  HiMiniArrowLongRight,
  HiMiniTrash,
} from 'react-icons/hi2';

const ButtonIcon = () => {
  return (
    <Stack wrap align="horizontal" fullWidth spacing="lg">
      <Button
        icon={HiMiniTrash}
        iconSize={20}

        variant="danger"
      >
        Delete
      </Button>
      <Button
        icon={HiChatBubbleOvalLeftEllipsis}
        iconSize={20}
        variant="ghost"
      >
        Chat
      </Button>
      <Button
        icon={HiMiniArrowLongRight}
        iconSize={20}
        iconPosition="right"
      >
        Get Started
      </Button>
    </Stack>
  );
};  

`;

const ButtonIcon = () => {
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack wrap align="horizontal" fullWidth spacing="lg">
            <Button leftIcon={HiMiniTrash} iconSize={18} variant="danger">
              Delete
            </Button>
            <Button
              leftIcon={HiChatBubbleOvalLeftEllipsis}
              iconSize={18}
              variant="ghost"
            >
              Chat
            </Button>
            <Button rightIcon={HiMiniArrowLongRight} iconSize={18}>
              Get Started
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default ButtonIcon;
