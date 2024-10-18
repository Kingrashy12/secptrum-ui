import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { Stack, Tabs, TabsHandle, TabPanel, TextInput } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const TextInputRadius = ({ code }: { code: string }) => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Wrap align="horizontal" spacing="lg">
            <TextInput
              Type="text"
              name="email"
              placeholder="Small Radius TextInput"
              variant="solid"
              radius="sm"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Medium Radius TextInput"
              variant="solid"
              radius="md"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Large Radius TextInput"
              variant="outline"
              radius="lg"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Extra Large Radius TextInput"
              variant="outline"
              radius="xl"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Full Radius TextInput"
              variant="solid"
              radius="full"
            />
          </Wrap>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default TextInputRadius;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;

const Wrap = styled(Stack)`
  flex-wrap: wrap;
`;
