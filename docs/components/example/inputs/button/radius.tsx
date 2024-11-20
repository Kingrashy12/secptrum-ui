import CodeBlock from "../../../custom/code/CodeBlock";
import React from "react";
import { Button, Card, Stack, TabPanel, Tabs, TabHandle } from "secptrum-ui";

const code = `
import { Button, Stack } from 'secptrum-ui';

const ButtonRadius = () => {
  return (
    <Stack wrap align="horizontal" fullWidth spacing="lg">
      <Button radius="md">Button (md)</Button>
      <Button radius="lg">Button (lg)</Button>
      <Button radius="xl">Button (xl)</Button>
      <Button radius="full">Button (full)</Button>
    </Stack>
  );
};  

`;

const ButtonRadius = () => {
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack wrap align="horizontal" fullWidth>
            <Button radius="md">Button</Button>
            <Button radius="lg">Button</Button>
            <Button radius="xl">Button</Button>
            <Button radius="full">Button</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default ButtonRadius;
