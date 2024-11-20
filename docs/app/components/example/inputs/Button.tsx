'use client';

import CodeBlock from '@/components/custom/code/CodeBlock';
import {
  Box,
  Button,
  Card,
  TabPanel,
  Tabs,
  TabHandle,
  Stack,
} from 'secptrum-ui';

const code = `
import { Button } from 'secptrum-ui';

const ButtonDemo = () => {
    return <Button>Button</Button>
}
`;

export default function ButtonDemo() {
  return (
    <Box fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Card fullWidth>
            <Stack>
              <Button>Button</Button>
            </Stack>
          </Card>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Box>
  );
}
