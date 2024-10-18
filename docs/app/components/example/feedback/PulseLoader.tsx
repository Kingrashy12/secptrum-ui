import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { PulseLoader, TabPanel, Tabs, TabsHandle, Stack } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const code = `
 import { PulseLoader } from 'secptrum-ui'

    const PulseLoaderExample = () => {
        return (
            <PulseLoader />
        )
    }
`;

const PulseLoadExample = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Stack>
            <PulseLoader />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} language="tsx" />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default PulseLoadExample;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
