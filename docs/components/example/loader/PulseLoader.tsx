import CodeBlock from "../../custom/code/CodeBlock";
import React from "react";
import {
  PulseLoader,
  TabPanel,
  Tabs,
  TabHandle,
  styled,
  Card,
  Stack,
} from "secptrum-ui";

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
    <Container fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

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

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
