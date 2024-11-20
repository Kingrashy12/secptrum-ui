import CodeBlock from "@/components/custom/code/CodeBlock";
import { toastCodes } from "@/data/codes/toast";
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
  colors,
} from "secptrum-ui";

const ToastTypes = () => {
  return (
    <Card fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <PrevContainer align="horizontal" wrap>
            <Button
              backgroundColor={colors.green[500]}
              onClick={() =>
                toast.success(
                  "Purchase successful! Your order is being processed."
                )
              }
            >
              Success
            </Button>
            <Button
              backgroundColor={colors.red[500]}
              onClick={() =>
                toast.error("An error occurred. Please try again.")
              }
            >
              Error
            </Button>
            <Button
              onClick={() => toast.info("Your request is being processed.")}
            >
              Info
            </Button>
            <Button
              backgroundColor={colors.yellow[500]}
              onClick={() =>
                toast.warning(
                  "Please review all details before proceeding to avoid any issues or errors."
                )
              }
            >
              Warning
            </Button>
          </PrevContainer>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={toastCodes.types} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default ToastTypes;

export const PrevContainer = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
