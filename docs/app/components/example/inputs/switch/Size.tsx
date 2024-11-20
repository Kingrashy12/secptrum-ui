import CodeBlock from "@/components/custom/code/CodeBlock";
import { switchCode } from "@/data/codes/switch";
import React, { useState } from "react";
import {
  Stack,
  Switch,
  Tabs,
  TabHandle,
  styled,
  TabPanel,
  Card,
} from "secptrum-ui";

const SwitchSizes = () => {
  const [isOn, setIsOn] = useState(false);
  const [switched, setSwitched] = useState(false);

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
              size="lg"
              onSwitch={() => setSwitched(!switched)}
            />
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={switchCode.sizes} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default SwitchSizes;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
