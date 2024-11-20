import CodeBlock from "@/components/custom/code/CodeBlock";
import React from "react";
import {
  CircularProgress,
  TabPanel,
  Tabs,
  TabHandle,
  Stack,
  styled,
  Card,
} from "secptrum-ui";

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
    <Container fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

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

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
