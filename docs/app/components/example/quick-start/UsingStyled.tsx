import CodeBlock from '@/components/custom/code/CodeBlock';
import { quickStart } from '@/data/codes/quick-start';
import React from 'react';
import {
  Card,
  Tabs,
  TabPanel,
  TabHandle,
  Button,
  styled,
  Stack,
} from 'secptrum-ui';

const UsingStyled = () => {
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <StyledButton>Styled Button</StyledButton>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={quickStart.usingStyled} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default UsingStyled;

const StyledButton = styled(Button)`
  background: red !important;
  color: white;
  border: 3px solid green !important;
  border-radius: 6px !important;

  &:hover {
    background: blue !important;
  }
`;
