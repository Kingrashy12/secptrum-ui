import CodeBlock from "../../../custom/code/CodeBlock";
import React, { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  Stack,
  Tabs,
  TabHandle,
  TabPanel,
  TextInput,
  styled,
  Card,
} from "secptrum-ui";
import { inputCodes } from "../../../../data/codes/textinput";

const TextInputWithError = () => {
  const [email, setEmail] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = emailRegex.test(email);

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              icon={MdOutlineAlternateEmail}
              errorMessage="Please enter a valid email address."
              hasError={email && !isValidEmail}
            />
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={inputCodes.error} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default TextInputWithError;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
