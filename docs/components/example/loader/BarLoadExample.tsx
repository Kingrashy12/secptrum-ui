import CodeBlock from "../../custom/code/CodeBlock";
import React from "react";
import {
  BarLoader,
  TabPanel,
  Tabs,
  TabHandle,
  Stack,
  styled,
  Card,
} from "secptrum-ui";

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
    <Container fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

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

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
