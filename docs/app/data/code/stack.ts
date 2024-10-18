export const stackCodes = {
  basic: `
import { Button, Stack } from "secptrum-ui";
import { RiVideoChatFill, RiMessage3Line, RiContactsFill } from "react-icons/ri";

 const BasicStack = () =>{
   return (
     <Stack>
      <Button size="lg" icon={RiVideoChatFill} variant="outline">
      Video Chat
      </Button>
      <Button size="lg" icon={RiMessage3Line} variant="ghost">
      Chat
      </Button>
      <Button icon={RiContactsFill} size="lg" variant="light">
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
        <Button size="lg" icon={RiVideoChatFill} variant="outline">
        Video Chat
        </Button>
        <Button size="lg" icon={RiMessage3Line} variant="ghost">
        Chat
        </Button>
        <Button icon={RiContactsFill} size="lg" variant="light">
         Add to contact
        </Button>
      </Stack>
   );
 };
    `,
};
