export const drawerCode = {
  basic: `
import React, { useState } from 'react';
import {
  Button,
  Drawer,
  HoverableIcon,
  Stack,
  DrawerHeader,
  DrawerFooter,
  toast,
  Box,
  Checkbox,
} from 'secptrum-ui';
import { styled } from 'styled-chroma';
import { AiOutlineClose } from 'react-icons/ai';
import { Divider } from '@/styles/global';

const DrawerExample = () => {
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

  return (
   <>
    <Stack>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
    </Stack>
    <Drawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
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
   </>
  );
};

export default DrawerExample;

const HeaderText = styled('h2')\`
  font-size: 20px;
  font-weight: 600;
\`;

const SubHeaderText = styled('h4')\`
  font-size: 16px;
  font-weight: 500;
\`;

const Paragraph = styled('p')\`
  font-size: 14px;
  font-weight: 400;
\`;
    `,
  variant: `
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
  DrawerHeader,
  DrawerFooter,
} from 'secptrum-ui';
import { styled } from 'styled-chroma';
import { AiOutlineClose } from 'react-icons/ai';
import { Divider } from '@/styles/global';

const DrawerVariants = () => {
   const [isOpen, setIsOpen] = useState(false);
  const [isOpenDefault, setIsOpenDefault] = useState(false);

  return (
    <>
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
    </>
  );
};

export default DrawerVariants;

const HeaderText = styled('h2')\`
  font-size: 20px;
  font-weight: 600;
\`;

const SubHeaderText = styled('h4')\`
  font-size: 16px;
  font-weight: 500;
\`;

const Paragraph = styled('p')\`
  font-size: 14px;
  font-weight: 400;
\`;
    `,
  position: `
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


const DrawerPosition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  return (
    <>
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
    </>
  );
};

export default DrawerPosition;

const HeaderText = styled('h2')\`
  font-size: 20px;
  font-weight: 600;
\`;

const SubHeaderText = styled('h4')\`
  font-size: 16px;
  font-weight: 500;
\`;

const Paragraph = styled('p')\`
  font-size: 14px;
  font-weight: 400;
\`;
    `,
};
