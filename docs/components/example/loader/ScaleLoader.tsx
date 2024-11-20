import CodeBlock from "../../custom/code/CodeBlock";
import React from "react";
import {
  ScaleLoader,
  TabPanel,
  Tabs,
  TabHandle,
  styled,
  Card,
  Stack,
} from "secptrum-ui";

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
    <Container fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

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

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
