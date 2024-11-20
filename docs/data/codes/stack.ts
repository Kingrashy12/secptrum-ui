export const stackCodes = {
  basic: `
import { Button, Stack } from "secptrum-ui";
import { RiVideoChatFill, RiMessage3Line, RiContactsFill } from "react-icons/ri";

 const BasicStack = () =>{
   return (
     <Stack>
      <Button icon={RiVideoChatFill} variant="outline">
      Video Chat
      </Button>
      <Button icon={RiMessage3Line} variant="ghost">
      Chat
      </Button>
      <Button icon={RiContactsFill} variant="light">
      Add to contact
      </Button>
     </Stack>
   );
 };
    `,
  align: `
import { Button, Stack } from "secptrum-ui";
import { RiVideoChatFill, RiMessage3Line, RiContactsFill } from "react-icons/ri";

 const BasicStack = () =>{
   return (
      <Stack align="horizontal">
        <Button icon={RiVideoChatFill} variant="outline">
        Video Chat
        </Button>
        <Button icon={RiMessage3Line} variant="ghost">
        Chat
        </Button>
        <Button icon={RiContactsFill} variant="light">
         Add to contact
        </Button>
      </Stack>
   );
 };
    `,
};
