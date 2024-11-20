import CodeBlock from "../../../custom/code/CodeBlock";
import { toastCodes } from "../../../../data/codes/toast";
import React from "react";
import {
  Stack,
  Tabs,
  TabHandle,
  TabPanel,
  Button,
  toast,
  styled,
  Card,
} from "secptrum-ui";

const TransitionsToast = () => {
  function walkin() {
    toast.success("Profile saved successfully!", {
      position: "bottom-left",
      transition: "walkIn",
    });
  }
  function slidein() {
    toast.info("New message received!", {
      position: "bottom-right",
      transition: "slideIn",
    });
  }
  function dropin() {
    toast.error("Error processing request!", {
      position: "top-left",
      transition: "dropIn",
    });
  }
  function popIn() {
    toast.success("Action completed!", {
      position: "top-right",
      transition: "popIn",
    });
  }

  return (
    <Card fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <PrevContainer align="horizontal" wrap>
            <Button onClick={walkin}>Walk in</Button>
            <Button variant="outline" onClick={slidein}>
              Slide in
            </Button>
            <Button variant="light" onClick={dropin}>
              Drop in
            </Button>
            <Button variant="ghost" onClick={popIn}>
              Pop in
            </Button>
          </PrevContainer>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={toastCodes.transition} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default TransitionsToast;

export const PrevContainer = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
