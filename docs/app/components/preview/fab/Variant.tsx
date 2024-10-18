'use client';

import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { IoAdd, IoClose } from 'react-icons/io5';
import { Stack, Tabs, TabsHandle, TabPanel, Fab } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const FabVariant = ({ code }: { code: string }) => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Conatiner align="horizontal">
            <Fab moveOnScroll size="lg" variant="light" position="top-left">
              <IoAdd />
            </Fab>
            <Fab size="lg" moveOnScroll position="top-right">
              <IoClose size={23} />
            </Fab>
          </Conatiner>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default FabVariant;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;
  height: 150px;
  position: relative;

  button {
    width: auto;
  }
`;
