import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { Stack } from 'secptrum-ui';
import { Button, Tabs, TabsHandle, TabPanel } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const ButtonPreview = ({ code }: { code: string }) => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Conatiner>
            <Button size="lg" radius="lg">
              Solid Button
            </Button>
          </Conatiner>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default ButtonPreview;

const Conatiner = styled(Stack)`
  width: auto;

  button {
    width: auto;
  }
`;
