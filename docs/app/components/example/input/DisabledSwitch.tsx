'use client';

import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React, { useState } from 'react';
import { Stack, Switch, TabPanel, Tabs, TabsHandle } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const DisabledSwitch = ({ code }: { code: string }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Stack spacing="lg" align="horizontal">
            <Switch checked={isOn} onSwitch={() => setIsOn(!isOn)} disabled />
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default DisabledSwitch;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
