import CodeBlock from "../../../custom/code/CodeBlock";
import { boxCode } from "../../../../data/codes/box";
import React from "react";
import { RiDeleteBin5Line, RiMessage3Line } from "react-icons/ri";
import {
  Box,
  Tabs,
  TabHandle,
  styled,
  Card,
  TabPanel,
  Button,
  toast,
} from "secptrum-ui";

const BoxExample = () => {
  return (
    <Card fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Container
            padding="16px"
            margin="24px"
            border="1px solid #ccc"
            paddingTop="lg"
            paddingBottom="lg"
            direction="column"
            centered
          >
            <Button
              leftIcon={RiMessage3Line}
              onClick={() =>
                toast.info("Login to chat with user", {
                  position: "top-left",
                })
              }
              variant="outline"
            >
              Chat
            </Button>
            <Button
              leftIcon={RiDeleteBin5Line}
              onClick={() =>
                toast.warning("You can't perform this action", {
                  transition: "dropIn",
                })
              }
              variant="danger"
            >
              Delete
            </Button>
          </Container>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={boxCode.ex} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default BoxExample;

const Container = styled(Box)`
  gap: 12px;

  button {
    margin-top: 9px;
  }
`;
