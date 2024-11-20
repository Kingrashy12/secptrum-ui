import CodeBlock from "@/components/custom/code/CodeBlock";
import { stackCodes } from "@/data/codes/stack";
import React from "react";
import {
  RiContactsFill,
  RiMessage3Line,
  RiVideoChatFill,
} from "react-icons/ri";
import {
  Stack,
  Tabs,
  TabHandle,
  styled,
  Card,
  TabPanel,
  Button,
} from "secptrum-ui";

const BasicStack = () => {
  return (
    <Card fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Container>
            <Button leftIcon={RiVideoChatFill} variant="outline">
              Video Chat
            </Button>
            <Button leftIcon={RiMessage3Line} variant="ghost">
              Chat
            </Button>
            <Button leftIcon={RiContactsFill} variant="light">
              Add to contact
            </Button>
          </Container>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={stackCodes.basic} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default BasicStack;

const Container = styled(Stack)`
  width: auto;
  flex-wrap: wrap;
`;
