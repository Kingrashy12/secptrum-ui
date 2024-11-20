import CodeBlock from "@/components/custom/code/CodeBlock";
import React, { useState } from "react";
import {
  Button,
  Drawer,
  HoverableIcon,
  Stack,
  TabPanel,
  Tabs,
  TabHandle,
  Box,
  DrawerHeader,
  DrawerFooter,
  styled,
  Card,
} from "secptrum-ui";
import { AiOutlineClose } from "react-icons/ai";
import { Divider } from "@/styles/global";
import { drawerCode } from "@/data/codes/drawer";

const DrawerVariant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDefault, setIsOpenDefault] = useState(false);

  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
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
            variant="modal"
          >
            <DrawerHeader>
              <HeaderText>Modal Drawer</HeaderText>
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
          <Drawer open={isOpenDefault} onClose={() => setIsOpenDefault(false)}>
            <DrawerHeader>
              <HeaderText>Default Drawer</HeaderText>
              <HoverableIcon
                icon={AiOutlineClose}
                size={22}
                onClick={() => setIsOpenDefault(false)}
              />
            </DrawerHeader>
            <Stack>
              <Box spacing="md" centered>
                <Paragraph>Content of the drawer</Paragraph>
              </Box>
            </Stack>
            <DrawerFooter position="right">
              <Button variant="outline" onClick={() => setIsOpenDefault(false)}>
                Close Drawer
              </Button>
              <Button onClick={() => setIsOpenDefault(false)}>Okay</Button>
            </DrawerFooter>
          </Drawer>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={drawerCode.variant} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default DrawerVariant;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;

export const HeaderText = styled("h1")`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.text};
`;

export const SubHeaderText = styled("h4")`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors?.text};
`;

export const Paragraph = styled("p")`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.body};
`;
