import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { BarLoader, TabPanel, Tabs, TabsHandle, Stack } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const code = `
 import { BarLoader } from 'secptrum-ui'

    const BarLoaderExample = () => {
        return (
            <BarLoader />
        )
    }
`;

const BarLoadExample = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Stack>
            <BarLoader />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} language="tsx" />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default BarLoadExample;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
