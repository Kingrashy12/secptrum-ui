import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';
import { Button, Card, Stack, TabPanel, Tabs, TabHandle } from 'secptrum-ui';

const code = `
import { Button, Stack } from 'secptrum-ui';

const ButtonLoading = () => {
  return (
    <Stack wrap fullWidth>
      <Button size="md" isLoading>Sign In</Button>
    </Stack>
  );
};  

`;

const ButtonLoading = () => {
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack wrap align="horizontal" fullWidth spacing="lg">
            <Button size="lg" isLoading>
              Sign In
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

export default ButtonLoading;
