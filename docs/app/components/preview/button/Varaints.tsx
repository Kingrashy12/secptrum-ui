import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { Stack, Tabs, TabsHandle, TabPanel, Button } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const ButtonVaraints = ({ code }: { code: string }) => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Conatiner align="horizontal" wrap>
            <Button size="lg" radius="lg">
              Solid Button
            </Button>
            <Button size="lg" radius="lg" variant="outline">
              Outline Button
            </Button>
            <Button variant="light" size="lg" radius="lg">
              Light Button
            </Button>
            <Button variant="ghost" size="lg" radius="lg">
              Ghost Button
            </Button>
            <Button variant="danger" size="lg" radius="lg">
              Danger Button
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

export default ButtonVaraints;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
