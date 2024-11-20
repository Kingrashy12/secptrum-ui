import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';
import {
  Card,
  Tabs,
  TabHandle,
  TabPanel,
  Stack,
  Button,
  toast,
} from 'secptrum-ui';

const Usage = () => {
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Button
              radius="lg"
              size="lg"
              onClick={() => toast.success('This is a success toast')}
            >
              Make a toast
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            code={`
import { toast, Button } from 'secptrum-ui'

const Demo = () => {
  return (
    <Button
      radius="lg"
      size="lg"
      onClick={() => toast.success('This is a success toast')}
    >
      Make a toast
    </Button>
  )
}
          `}
          />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default Usage;
