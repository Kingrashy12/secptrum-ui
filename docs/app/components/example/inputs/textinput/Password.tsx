import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';
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

const TextInput_Password = () => {
  return (
    <Container fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Stack spacing="lg">
            <TextInput
              Type="password"
              name="password"
              placeholder="Enter your password"
              variant="outline"
            />
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={inputCodes.pass} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default TextInput_Password;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
