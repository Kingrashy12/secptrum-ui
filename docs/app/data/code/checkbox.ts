export const checkboxCode = {
  basic: `
import { Checkbox, Stack } from "secptrum-ui";

export const App = () => {
 const [check, setCheck] = useState(false);

  return (
    <Stack align="horizontal" spacing="lg">
      <Trigger onClick={() => setCheck(!check)}>
        <Checkbox checked={check} onCheck={() => setCheck(!check)} />
        <Text>I have reviewed and accepted the terms.</Text>
      </Trigger>
    </Stack>
  );
};
    `,
  rounded: `
import { Checkbox, Stack } from "secptrum-ui";

export const App = () => {
 const [check, setCheck] = useState(false);

  return (
    <Stack align="horizontal" spacing="lg">
      <Trigger onClick={() => setCheck(!check)}>
        <Checkbox
          checked={check}
          rounded
          onCheck={() => setCheck(!check)}
        />
        <Text>I have reviewed and accepted the terms.</Text>
        </Trigger>
    </Stack>
  );
};
    `,
};
