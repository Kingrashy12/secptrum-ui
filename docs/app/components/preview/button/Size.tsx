import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { Stack, Tabs, TabsHandle, TabPanel, Button } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const ButtonSize = ({ code }: { code: string }) => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Conatiner align="horizontal" wrap>
            <Button size="md" radius="lg">
              Medium Button
            </Button>
            <Button size="lg" radius="lg" variant="outline">
              Large Button
            </Button>
            <Button variant="danger" size="xl" radius="lg">
              Extra Large Button
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

export default ButtonSize;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
