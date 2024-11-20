import CodeBlock from "../../custom/code/CodeBlock";
import React from "react";
import {
  Stack,
  Tabs,
  TabHandle,
  styled,
  Card,
  TabPanel,
  CircleLoader,
} from "secptrum-ui";

const code = `
import { CircleLoader } from 'secptrum-ui'

 export const CircleLoaderDemo = () => {
    return <CircleLoader />;
  };
`;

const CircleLoaderExample = () => {
  return (
    <Card fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <PrevContainer align="horizontal">
            <CircleLoader />
          </PrevContainer>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default CircleLoaderExample;

export const PrevContainer = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
