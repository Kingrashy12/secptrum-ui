import CodeBlock from '@/components/custom/code/CodeBlock';
import { inputCodes } from '@/data/codes/textinput';
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

const TextInputVariants = () => {
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
              placeholder="Solid TextInput"
              variant="solid"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Outline TextInput"
              variant="outline"
            />
            <TextInput
              Type="text"
              name="email"
              placeholder="Ghost TextInput"
              variant="ghost"
            />
          </Wrap>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={inputCodes.variant} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default TextInputVariants;

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
