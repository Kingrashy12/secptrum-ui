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

const BasicToast = () => {
  return (
    <Card fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <PrevContainer align="horizontal">
            <Button onClick={() => toast.info("This is a toast notification.")}>
              Make a toast
            </Button>
          </PrevContainer>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={toastCodes.basic} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default BasicToast;

export const PrevContainer = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
