import CodeBlock from "../../../custom/code/CodeBlock";
import { fonts } from "../../../../styles/global";
import React, { useState } from "react";
import {
  Box,
  Card,
  Checkbox,
  Stack,
  styled,
  TabHandle,
  TabPanel,
  Tabs,
} from "secptrum-ui";

const code = `
import { useState } from 'react';
import { Checkbox, Stack, Box } from 'secptrum-ui';

const Example = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Box spacing="md" onClick={() => setChecked(!checked)}>
        <Checkbox
          checked={checked}
          onCheck={() => setChecked(!checked)}
        />
        <p>I have read and agree to the terms of service.</p>
      </Box>
    </Stack>
  );
};
`;

const BasicCheck = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Box spacing="md" onClick={() => setChecked(!checked)}>
              <Checkbox
                checked={checked}
                onCheck={() => setChecked(!checked)}
              />
              <CheckText>
                I have read and agree to the terms of service.
              </CheckText>
            </Box>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default BasicCheck;

export const CheckText = styled("p")`
  font-size: 13px;
  font-weight: 500;
  font-family: ${fonts.poppins};
  cursor: default;
`;
