export const fabCodes = {
  size: `
import { Stack, Fab } from 'secptrum-ui';
import { IoAdd } from 'react-icons/io5'

  export const App = () => {

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
  variant: `
import { Stack, Fab } from 'secptrum-ui';
import { IoAdd, IoClose } from 'react-icons/io5'

  export const App = () => {

  return (
    <Stack align="horizontal">
       <Fab moveOnScroll variant="light" position="top-left">
            <IoAdd />
          </Fab>
          <Fab size="xl" moveOnScroll position="top-right">
            <IoClose />
          </Fab>
        </Conatiner>
    </Stack>
   );
};
    `,
};
