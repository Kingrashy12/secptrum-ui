import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import { fonts } from '@/styles/global';
import React, { useState } from 'react';
import { Stack, Tabs, TabsHandle, TabPanel, Box, Checkbox } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const CheckboxExample = ({ code }: { code: string }) => {
  const [check, setCheck] = useState(false);

  return (
    <Container>
      <Tabs>
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Stack align="horizontal" spacing="lg">
            <Trigger onClick={() => setCheck(!check)}>
              <Checkbox checked={check} onCheck={() => setCheck(!check)} />
              <Text>I have reviewed and accepted the terms.</Text>
            </Trigger>
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default CheckboxExample;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;

const Trigger = styled(Box)`
  align-items: center;
  gap: 8px;
  cursor: default;
`;

const Text = styled('p')`
  font-size: 13px;
  font-family: ${fonts.poppins};
  font-weight: 400;
  color: ${(props) => props.theme.colors?.text};
`;
