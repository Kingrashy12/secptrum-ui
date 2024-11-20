"use client";

import CodeBlock from "@/components/custom/code/CodeBlock";
import { switchCode } from "@/data/codes/switch";
import React, { useState } from "react";
import {
  Stack,
  Switch,
  Tabs,
  TabHandle,
  TabPanel,
  colors,
  styled,
  Card,
} from "secptrum-ui";

const SwitchColors = () => {
  const [isOn, setIsOn] = useState(false);
  const [switched, setSwitched] = useState(false);
  const [onSwitch, setOnSwitch] = useState(false);

  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Stack spacing="lg" align="horizontal">
            <Switch checked={isOn} onSwitch={() => setIsOn(!isOn)} />
            <Switch
              checked={switched}
              color={colors.red[500]}
              checkedColor={colors.green[500]}
              onSwitch={() => setSwitched(!switched)}
            />
            <Switch
              checked={onSwitch}
              color={colors.neutral[600]}
              checkedColor={colors.yellow[500]}
              onSwitch={() => setOnSwitch(!onSwitch)}
            />
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={switchCode.colors} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default SwitchColors;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
