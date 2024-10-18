import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { RiDeleteBin5Line, RiMessage3Line } from 'react-icons/ri';
import { Box, Tabs, TabsHandle, TabPanel, Button, toast } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const BoxExample = ({ code }: { code: string }) => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Container
            padding="16px"
            margin="24px"
            border="1px solid #ccc"
            paddingTop="lg"
            paddingBottom="lg"
            direction="column"
            centered
          >
            <Button
              size="lg"
              icon={RiMessage3Line}
              onClick={() =>
                toast.info('Login to chat with user', {
                  position: 'top-left',
                })
              }
              variant="outline"
            >
              Chat
            </Button>
            <Button
              icon={RiDeleteBin5Line}
              onClick={() =>
                toast.warning("You can't perform this action", {
                  transition: 'dropIn',
                })
              }
              size="lg"
              variant="danger"
            >
              Delete
            </Button>
          </Container>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default BoxExample;

const Container = styled(Box)`
  gap: 12px;

  button {
    margin-top: 9px;
  }
`;
