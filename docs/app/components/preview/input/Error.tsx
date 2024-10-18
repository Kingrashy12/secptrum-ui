'use client';

import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React, { useState } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Stack, Tabs, TabsHandle, TabPanel, TextInput } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const TextInputWithError = ({ code }: { code: string }) => {
  const [email, setEmail] = useState('');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = emailRegex.test(email);

  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

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
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default TextInputWithError;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
