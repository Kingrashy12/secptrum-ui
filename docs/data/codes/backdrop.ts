export const dropCode = {
  basic: `
import { Stack, Button, Backdrop, CircularProgress } from 'secptrum-ui';
  
  export const BackdropDemo = () => {
    const [open, setOpen] = useState(false);
   
    return (
      <Stack>
        <Backdrop open={open} onClose={() => setOpen(false)}>
            <CircularProgress />
        </Backdrop>
        <Button onClick={() => setOpen(true)}>Open Backdrop</Button>
      </Stack>
    );
};
      `,
};
