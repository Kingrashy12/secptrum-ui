'use client';

import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React, { useState } from 'react';
import {
  Stack,
  Tabs,
  TabsHandle,
  TabPanel,
  Button,
  CircularProgress,
  Backdrop,
} from 'secptrum-ui';
import { styled } from 'styled-chroma';

const BasicDrop = ({ code }: { code: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Conatiner align="horizontal">
            <Backdrop open={open} onClose={() => setOpen(false)}>
              <CircularProgress />
            </Backdrop>
            <Button onClick={() => setOpen(true)}>Open Backdrop</Button>
          </Conatiner>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default BasicDrop;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
