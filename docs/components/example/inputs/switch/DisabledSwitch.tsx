"use client";

import CodeBlock from "../../../custom/code/CodeBlock";
import { switchCode } from "../../../../data/codes/switch";
import React, { useState } from "react";
import {
  Stack,
  Switch,
  TabPanel,
  Tabs,
  TabHandle,
  styled,
  Card,
} from "secptrum-ui";

const DisabledSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Stack spacing="lg" align="horizontal">
            <Switch checked={isOn} onSwitch={() => setIsOn(!isOn)} disabled />
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={switchCode.disabled} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default DisabledSwitch;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
