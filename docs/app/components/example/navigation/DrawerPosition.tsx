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
  Box,
  DrawerFooter,
  DrawerHeader,
} from 'secptrum-ui';
import { styled } from 'styled-chroma';
import { AiOutlineClose } from 'react-icons/ai';
import { Divider } from '@/styles/global';

const DrawerPosition = ({ code }: { code: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLeft, setIsOpenLeft] = useState(false);

  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>
        <TabPanel>
          <Stack>
            <Box centered spacing="lg">
              <Paragraph>Right Position Drawer:</Paragraph>
              <Button variant="outline" onClick={() => setIsOpen(true)}>
                Open
              </Button>
            </Box>
            <Divider />
            <Box centered spacing="lg">
              <Paragraph>Left Position Drawer:</Paragraph>
              <Button variant="outline" onClick={() => setIsOpenLeft(true)}>
                Open
              </Button>
            </Box>
          </Stack>
          <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
            <DrawerHeader>
              <HeaderText>Right Position Drawer</HeaderText>
              <HoverableIcon
                icon={AiOutlineClose}
                size={22}
                onClick={() => setIsOpen(false)}
              />
            </DrawerHeader>
            <Stack>
              <Box spacing="md" centered>
                <Paragraph>Content of the drawer</Paragraph>
              </Box>
            </Stack>
            <DrawerFooter position="right">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Close Drawer
              </Button>
              <Button onClick={() => setIsOpen(false)}>Okay</Button>
            </DrawerFooter>
          </Drawer>
          <Drawer
            open={isOpenLeft}
            onClose={() => setIsOpenLeft(false)}
            position="left"
          >
            <DrawerHeader>
              <HeaderText>Left Position Drawer</HeaderText>
              <HoverableIcon
                icon={AiOutlineClose}
                size={22}
                onClick={() => setIsOpenLeft(false)}
              />
            </DrawerHeader>
            <Stack>
              <Box spacing="md" centered>
                <Paragraph>Content of the drawer</Paragraph>
              </Box>
            </Stack>
            <DrawerFooter position="left">
              <Button variant="outline" onClick={() => setIsOpenLeft(false)}>
                Close Drawer
              </Button>
              <Button onClick={() => setIsOpenLeft(false)}>Okay</Button>
            </DrawerFooter>
          </Drawer>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default DrawerPosition;

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
