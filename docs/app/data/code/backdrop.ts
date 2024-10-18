export const dropCode = {
  basic: `
import { Stack, Button, Backdrop, CircleLoader } from 'secptrum-ui';
  
  export const App = () => {
    const [open, setOpen] = useState(false);
   
    return (
      <Stack align="horizontal">
        <Backdrop open={open} onClose={() => setOpen(false)}>
            <CircleLoader />
        </Backdrop>
        <Button onClick={() => setOpen(true)}>Open Backdrop</Button>
      </Stack>
    );
};
      `,
};
