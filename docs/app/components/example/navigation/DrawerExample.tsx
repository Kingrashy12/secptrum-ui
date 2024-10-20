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
  toast,
  Box,
  Checkbox,
} from 'secptrum-ui';
import { styled } from 'styled-chroma';
import { AiOutlineClose } from 'react-icons/ai';
import { Divider } from '@/styles/global';

const DrawerExample = ({ code }: { code: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    if (!checked) {
      toast.error('Please accept terms and conditions');
    } else {
      toast.success('Form submitted successfully');
      setIsOpen(false);
      setChecked(false);
    }
  };

  const header = (
    <>
      <HeaderText>Apply for a Role</HeaderText>
      <HoverableIcon
        icon={AiOutlineClose}
        size={22}
        onClick={() => setIsOpen(false)}
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
            <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
          </Stack>
          <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            header={header}
          >
            <Divider />
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
            <Divider />
            <ModalFooter position="right">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Close Drawer
              </Button>
              <Button onClick={handleSubmit}>Submit</Button>
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

export default DrawerExample;

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
