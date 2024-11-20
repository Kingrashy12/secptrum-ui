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

const PositionToast = () => {
  return (
    <Card fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <PrevContainer align="horizontal">
            <Button
              variant="outline"
              onClick={() =>
                toast.success("A Toast from Top Left", {
                  position: "top-left",
                  transition: "dropIn",
                })
              }
            >
              Top Left
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.success("A Toast from Top Right", {
                  position: "top-right",
                  transition: "dropIn",
                })
              }
            >
              Top Right
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.success("A Toast from Bottom Left", {
                  position: "bottom-left",
                  transition: "popIn",
                })
              }
            >
              Bottom Left
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.success("A Toast from Bottom Right", {
                  position: "bottom-right",
                  transition: "popIn",
                })
              }
            >
              Bottom Right
            </Button>
          </PrevContainer>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={toastCodes.position} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default PositionToast;

export const PrevContainer = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
