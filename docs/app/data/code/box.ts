export const boxCode = {
  ex: `
 import { Box, Button, toast } from 'secptrum-ui';
 import { RiDeleteBin5Line, RiMessage3Line } from "react-icons/ri";
 
 export const App = () => {
   return (
      <Box
          padding="16px"
          margin="24px"
          border="1px solid #ccc"
          paddingTop="md"
          paddingBottom="lg"
          direction="column"
          space={12}
          centered
        >
          <Button size="lg"
          variant="outline"
           icon={RiMessage3Line}
            onClick={() =>
              toast.info("Login to chat with user", {
                transition: "walkIn",
                position: "top-left",
              })
            }
          >
            Chat
          </Button>
          <Button icon={RiDeleteBin5Line}
          size="lg"
          variant="danger"
           onClick={() =>
              toast.warning("You can't perform this action", {
                transition: "dropIn",
              })
            }
          >
            Delete
          </Button>
        </Box>
   );
 };
    `,
  lay: `
 import { Box, Button, toast } from 'secptrum-ui';
 import { RiDeleteBin5Line, RiMessage3Line } from "react-icons/ri";
 
 export const App = () => {
   return (
      <Box
        padding="16px"
        direction="row"
        space={12}
        centered
        >
          <Button size="lg"
          variant="outline"
           icon={RiMessage3Line}
            onClick={() =>
              toast.info("Login to chat with user", {
                transition: "walkIn",
                position: "top-left",
              })
            }
          >
            Chat
          </Button>
          <Button icon={RiDeleteBin5Line}
           size="lg"
           variant="danger"
            onClick={() =>
              toast.warning("You can't perform this action", {
                transition: "dropIn",
              })
            }
           >
            Delete
          </Button>
        </Box>
   );
 };
    `,
};
