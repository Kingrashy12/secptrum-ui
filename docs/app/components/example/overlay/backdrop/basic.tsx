"use client";

import CodeBlock from "@/components/custom/code/CodeBlock";
import { dropCode } from "@/data/codes/backdrop";
import React, { useState } from "react";
import {
  Stack,
  Tabs,
  TabHandle,
  TabPanel,
  Button,
  CircularProgress,
  Backdrop,
  styled,
  Card,
} from "secptrum-ui";

const BasicDrop = () => {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Conatiner align="horizontal">
            <Backdrop open={open} onClose={() => setOpen(false)}>
              <CircularProgress />
            </Backdrop>
            <Button onClick={() => setOpen(true)}>Open Backdrop</Button>
          </Conatiner>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={dropCode.basic} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default BasicDrop;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
