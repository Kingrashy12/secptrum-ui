import CodeBlock from "../../../custom/code/CodeBlock";
import React, { useState } from "react";
import {
  Button,
  Drawer,
  HoverableIcon,
  Stack,
  TabPanel,
  Tabs,
  TabHandle,
  toast,
  Box,
  Checkbox,
  DrawerFooter,
  DrawerHeader,
  Card,
  styled,
} from "secptrum-ui";
import { AiOutlineClose } from "react-icons/ai";
import { drawerCode } from "../../../../data/codes/drawer";

const DrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    if (!checked) {
      toast.error("Please accept terms and conditions");
    } else {
      toast.success("Form submitted successfully");
      setIsOpen(false);
      setChecked(false);
    }
  };

  return (
    <Container fullWidth>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
          </Stack>
          <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
            <DrawerHeader>
              <HeaderText>Apply for a Role</HeaderText>
              <HoverableIcon
                icon={AiOutlineClose}
                size={22}
                onClick={() => setIsOpen(false)}
              />
            </DrawerHeader>
            <Stack>
              <SubHeaderText>Terms and Conditions</SubHeaderText>
              <Box spacing="md" centered onClick={() => setChecked(!checked)}>
                <Checkbox
                  checked={checked}
                  onCheck={() => setChecked(!checked)}
                />
                <Paragraph>Lorem ipsum dolor sit amet consectetur</Paragraph>
              </Box>
            </Stack>
            <DrawerFooter position="right">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Close Drawer
              </Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </DrawerFooter>
          </Drawer>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={drawerCode.basic} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default DrawerExample;

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
