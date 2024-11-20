import CodeBlock from "../../../custom/code/CodeBlock";
import React from "react";
import { Button, Card, TabPanel, Tabs, TabHandle, Stack } from "secptrum-ui";

const code = `
import { Button, Stack } from 'secptrum-ui';

const ButtonVariants = () => {
  return (
    <Stack wrap fullWidth spacing="lg" align="horizontal">
      <Button>Solid Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="light">Light Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="danger">Danger Button</Button>
    </Stack>
  );
};
`;

const Variants = () => {
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack wrap fullWidth spacing="lg" align="horizontal">
            <Button>Solid Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="light">Light Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="danger">Danger Button</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default Variants;
