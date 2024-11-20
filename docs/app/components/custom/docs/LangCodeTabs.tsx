import React from 'react';
import { Box, TabPanel, Tabs, TabHandle } from 'secptrum-ui';
import CodeBlock from '../code/CodeBlock';

export const LangCodeTabs = ({
  tsCode,
  jsCode,
}: {
  tsCode: string;
  jsCode: string;
}) => {
  return (
    <Box direction="column" spacing="md" marginTop="md">
      <Tabs variant="solid">
        <TabHandle value="typescript">TypeScript</TabHandle>
        <TabHandle value="javascript">JavaScript</TabHandle>
        <TabPanel>
          <CodeBlock code={tsCode} />
        </TabPanel>
        <TabPanel>
          <CodeBlock code={jsCode} />
        </TabPanel>
      </Tabs>
    </Box>
  );
};
