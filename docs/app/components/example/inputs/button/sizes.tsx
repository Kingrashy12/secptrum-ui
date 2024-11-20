import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';
import { Button, Card, Stack, TabPanel, Tabs, TabHandle } from 'secptrum-ui';

const code = `
import { Button, Stack } from 'secptrum-ui';

const ButtonSizes = () => {
  return (
    <Stack wrap align="horizontal" fullWidth spacing="lg">
      <Button size="md">Button (md)</Button>
      <Button size="lg">Button (lg)</Button>
      <Button size="xl">Button (xl)</Button>
    </Stack>
  );
};  

`;

const Sizes = () => {
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack wrap align="horizontal" fullWidth spacing="lg">
            <Button size="md">Button (md)</Button>
            <Button size="lg">Button (lg)</Button>
            <Button size="xl">Button (xl)</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default Sizes;
