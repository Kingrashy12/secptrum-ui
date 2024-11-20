import CodeBlock from '@/components/custom/code/CodeBlock';

import React, { useState } from 'react';
import {
  Box,
  Card,
  Checkbox,
  Stack,
  TabHandle,
  TabPanel,
  Tabs,
} from 'secptrum-ui';
import { CheckText } from './BasicCheck';

const code = `
import { useState } from 'react';
import { Checkbox, Stack, Box } from 'secptrum-ui';

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Box spacing="md" onClick={() => setChecked(!checked)}>
        <Checkbox
          checked={checked}
          onCheck={() => setChecked(!checked)}
          rounded
        />
        <p>I have read and agree to the terms of service.</p>
      </Box>
    </Stack>
  );
};
`;

const RoundedCheck = () => {
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
                rounded
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

export default RoundedCheck;
