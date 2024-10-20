import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React, { useState } from 'react';
import {
  Button,
  Drawer,
  HoverableIcon,
  Stack,
  TabPanel,
  Tabs,
  TabsHandle,
  ModalFooter,
  Box,
} from 'secptrum-ui';
import { styled } from 'styled-chroma';
import { AiOutlineClose } from 'react-icons/ai';
import { Divider } from '@/styles/global';

const DrawerVariant = ({ code }: { code: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDefault, setIsOpenDefault] = useState(false);

  const header = (
    <>
      <HeaderText>Modal Drawer</HeaderText>
      <HoverableIcon
        icon={AiOutlineClose}
        size={22}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
  const header_default = (
    <>
      <HeaderText>Default Drawer</HeaderText>
      <HoverableIcon
        icon={AiOutlineClose}
        size={22}
        onClick={() => setIsOpenDefault(false)}
      />
    </>
  );
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>
        <TabPanel>
          <Stack>
            <Box centered spacing="lg">
              <Paragraph>Modal Drawer:</Paragraph>
              <Button variant="outline" onClick={() => setIsOpen(true)}>
                Open
              </Button>
            </Box>
            <Divider />
            <Box centered spacing="lg">
              <Paragraph>Default Drawer:</Paragraph>
              <Button variant="outline" onClick={() => setIsOpenDefault(true)}>
                Open
              </Button>
            </Box>
          </Stack>
          <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            header={header}
            variant="modal"
          >
            <Divider />
            <Stack>
              <Box spacing="md" centered>
                <Paragraph>Content of the drawer</Paragraph>
              </Box>
            </Stack>
            <Divider />
            <ModalFooter position="right">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Close Drawer
              </Button>
              <Button onClick={() => setIsOpen(false)}>Okay</Button>
            </ModalFooter>
          </Drawer>
          <Drawer
            open={isOpenDefault}
            onClose={() => setIsOpenDefault(false)}
            header={header_default}
          >
            <Divider />
            <Stack>
              <Box spacing="md" centered>
                <Paragraph>Content of the drawer</Paragraph>
              </Box>
            </Stack>
            <Divider />
            <ModalFooter position="right">
              <Button variant="outline" onClick={() => setIsOpenDefault(false)}>
                Close Drawer
              </Button>
              <Button onClick={() => setIsOpenDefault(false)}>Okay</Button>
            </ModalFooter>
          </Drawer>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default DrawerVariant;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;

export const HeaderText = styled('h2')`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.text};
`;

export const SubHeaderText = styled('h4')`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors?.text};
`;

export const Paragraph = styled('p')`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.body};
`;
