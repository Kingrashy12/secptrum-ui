import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { ScaleLoader, TabPanel, Tabs, TabsHandle, Stack } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const code = `
 import { ScaleLoader } from 'secptrum-ui'

    const ScaleLoaderExample = () => {
        return (
            <ScaleLoader />
        )
    }
`;

const ScaleLoadExample = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Stack>
            <ScaleLoader />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} language="tsx" />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default ScaleLoadExample;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
