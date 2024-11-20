import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import {
  Stack,
  Tabs,
  TabHandle,
  TabPanel,
  TextInput,
  styled,
  Card,
} from 'secptrum-ui';
import { inputCodes } from '@/data/codes/textinput';

const DisabledTextInput = () => {
  return (
    <Container fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Stack spacing="lg">
            <TextInput
              Type="email"
              name="email"
              placeholder="Enter your email"
              icon={MdOutlineAlternateEmail}
              disabled
            />
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={inputCodes.disabled} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default DisabledTextInput;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
