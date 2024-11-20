import CodeBlock from "../../../custom/code/CodeBlock";
import React, { useState } from "react";
import { Card, Checkbox, Stack, TabHandle, TabPanel, Tabs } from "secptrum-ui";

const code = `
import { useState } from 'react';
import { Checkbox, Stack } from 'secptrum-ui';

const Example = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox checked={checked} onCheck={() => setChecked(!checked)} />
    </Stack>
  );
};
`;

const Example = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Checkbox checked={checked} onCheck={() => setChecked(!checked)} />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default Example;
