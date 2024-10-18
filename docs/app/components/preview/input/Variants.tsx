import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { Stack, Tabs, TabsHandle, TabPanel, TextInput } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const TextInput_Variants = ({ code }: { code: string }) => {
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
              placeholder="Solid TextInput"
              variant="solid"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Outline TextInput"
              variant="outline"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Ghost TextInput"
              variant="ghost"
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

export default TextInput_Variants;

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
