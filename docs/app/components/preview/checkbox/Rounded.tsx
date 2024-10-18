import { Typography } from '@/components';
import CodeBlock from '@/components/custom/code/CodeBlock';
import { CodeCard } from '@/components/example/layout/BasicTabs';
import { Preview } from '@/styles/docs/start.styled';
import { fonts } from '@/styles/global';
import React, { useState } from 'react';
import { Stack, Tabs, TabsHandle, Box, Checkbox } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const RoundedCheck = ({ code }: { code: string }) => {
  const [check, setCheck] = useState(false);

  return (
    <Container>
      <Tabs>
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <CodeCard>
          <Stack align="horizontal" spacing="lg">
            <Trigger onClick={() => setCheck(!check)}>
              <Checkbox
                checked={check}
                rounded
                onCheck={() => setCheck(!check)}
              />
              <Text>I have reviewed and accepted the terms.</Text>
            </Trigger>
          </Stack>
        </CodeCard>

        <CodeCard>
          <CodeBlock code={code} />
        </CodeCard>
      </Tabs>
    </Container>
  );
};

export default RoundedCheck;

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

const Text = styled(Typography)`
  font-size: 13px;
  font-family: ${fonts.poppins};
  font-weight: 500;
  color: ${(props) => props.theme.colors?.text};
`;
