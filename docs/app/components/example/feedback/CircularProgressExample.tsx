import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import {
  CircularProgress,
  TabPanel,
  Tabs,
  TabsHandle,
  Stack,
} from 'secptrum-ui';
import { styled } from 'styled-chroma';

const code = `
 import { CircularProgress } from 'secptrum-ui'

    const CircularProgressExample = () => {
        return (
            <CircularProgress />
        )
    }
`;

const CircularProgressExample = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Stack>
            <CircularProgress />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} language="tsx" />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default CircularProgressExample;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
