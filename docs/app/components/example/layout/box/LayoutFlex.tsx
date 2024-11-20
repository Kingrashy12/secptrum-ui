import CodeBlock from "@/components/custom/code/CodeBlock";
import { boxCode } from "@/data/codes/box";
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

const BoxLay = () => {
  return (
    <Card fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Container padding="16px" direction="row" centered>
            <Button
              variant="outline"
              leftIcon={RiMessage3Line}
              onClick={() =>
                toast.info("Login to chat with user", {
                  transition: "walkIn",
                  position: "top-left",
                })
              }
            >
              Chat
            </Button>
            <Button
              leftIcon={RiDeleteBin5Line}
              variant="danger"
              onClick={() =>
                toast.warning("You can't perform this action", {
                  transition: "dropIn",
                })
              }
            >
              Delete
            </Button>
          </Container>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={boxCode.lay} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default BoxLay;

const Container = styled(Box)`
  gap: 12px;

  /* button {
    margin-top: 9px;
  } */
`;
