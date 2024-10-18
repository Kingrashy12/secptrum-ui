import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { Stack, Tabs, TabsHandle, TabPanel, Button } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const ButtonRadius = ({ code }: { code: string }) => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Conatiner align="horizontal" wrap>
            <Button size="md" radius="md">
              Medium Radius Button
            </Button>
            <Button size="md" radius="lg">
              Large Radius Button
            </Button>
            <Button size="md" radius="xl">
              Extra Large Radius Button
            </Button>
            <Button size="lg" radius="full">
              Full Radius Button
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

export default ButtonRadius;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
