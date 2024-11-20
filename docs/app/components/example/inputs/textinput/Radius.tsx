import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';
import {
  Stack,
  Tabs,
  TabHandle,
  styled,
  TabPanel,
  TextInput,
  Card,
} from 'secptrum-ui';
import { inputCodes } from '@/data/codes/textinput';

const TextInputRadius = () => {
  return (
    <Container fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Wrap align="horizontal" spacing="lg" wrap>
            <TextInput
              Type="text"
              name="email"
              placeholder="Small Radius TextInput"
              variant="solid"
              radius="sm"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Medium Radius TextInput"
              variant="solid"
              radius="md"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Large Radius TextInput"
              variant="outline"
              radius="lg"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Extra Large Radius TextInput"
              variant="outline"
              radius="xl"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Full Radius TextInput"
              variant="solid"
              radius="full"
            />
          </Wrap>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={inputCodes.radius} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default TextInputRadius;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;

const Wrap = styled(Stack)`
  flex-wrap: wrap;
`;
