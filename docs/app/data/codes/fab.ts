export const fabCode = {
  size: `
import { Stack, Fab } from 'secptrum-ui';
import { IoAdd } from 'react-icons/io5'
    
const SizeDemo = () => {
    
return (
    <Stack align="horizontal">
      <Fab moveOnScroll position="top-left">
        <IoAdd />
      </Fab>
      <Fab size="lg" moveOnScroll position="top-center">
        <IoAdd />
      </Fab>
      <Fab size="xl" moveOnScroll position="top-right">
       <IoAdd />
      </Fab>
    </Stack>
  );
};        
    `,
  colorScheme: `
import { Stack, Fab } from 'secptrum-ui';
import { IoAdd } from 'react-icons/io5';
import { HiArchiveBox, HiTrash } from "react-icons/hi2";
    
const ColorSchemeDemo = () => {
    
return (
    <Stack wrap>
      <Fab moveOnScroll position="top-left">
        <IoAdd />
      </Fab>
      <Fab
       moveOnScroll
       colorScheme="secondary"
       position="top-center"
      >
        <HiArchiveBox />
      </Fab>
      <Fab
       moveOnScroll
       colorScheme="danger"
       position="top-right"
       >
        <HiTrash />
      </Fab>
    </Stack>
  );
};        
    `,
  position: `
import { Stack, Fab } from 'secptrum-ui';
import { IoAdd } from 'react-icons/io5';
import {
  HiArchiveBox,
  HiOutlineNoSymbol,
  HiOutlinePaperAirplane,
  HiTrash,
} from "react-icons/hi2";
    
const PositionDemo = () => {
    
return (
    <Stack wrap>
     <Fab moveOnScroll position="top-left">
       <HiOutlinePaperAirplane />
     </Fab>
     <Fab moveOnScroll colorScheme="secondary" position="top-center">
       <HiArchiveBox />
     </Fab>
     <Fab moveOnScroll colorScheme="danger" position="top-right">
       <HiOutlineNoSymbol />
     </Fab>

     <Fab moveOnScroll position="bottom-left">
        <IoAdd />
     </Fab>

     <Fab moveOnScroll colorScheme="danger" position="bottom-right">
      <HiTrash />
     </Fab>
    </Stack>
  );
};        
    `,
  variant: `
import { Stack, Fab } from 'secptrum-ui';
import { IoAdd, IoClose } from 'react-icons/io5'
    
const VariantDemo = () => {
    
return (
 <Stack align="horizontal">
    <Fab moveOnScroll variant="light" position="top-left">
      <IoAdd />
    </Fab>
    <Fab size="xl" moveOnScroll position="top-right">
      <IoClose />
    </Fab>
 </Stack>
  );
};    
    `,
};
