export const switchCode = {
  sizes: `
  import { Switch, Stack } from "secptrum-ui";
  
  export const SwitchSizeExample = () => {
    const [isOn, setIsOn] = useState(false);
    const [switched, setSwitched] = useState(false);
  
    return (
      <Stack spacing="lg" align="horizontal">
          <Switch checked={isOn} onSwitch={() => setIsOn(!isOn)} />
          <Switch
            checked={switched}
            size="lg"
            onSwitch={() => setSwitched(!switched)}
          />
        </Stack>
    );
  };
      `,
  disabled: `
  import { Switch, Stack } from "secptrum-ui";
  
  export const DisabledSwitch = () => {
    const [isOn, setIsOn] = useState(false);
  
    return (
      <Stack spacing="lg" align="horizontal">
        <Switch checked={isOn} onSwitch={() => setIsOn(!isOn)} disabled />
      </Stack>
    );
  };
      `,
  colors: `
  import { Switch, Stack, colors } from "secptrum-ui";
  
  export const SwitchColorExample = () => {
    const [isOn, setIsOn] = useState(false);
    const [switched, setSwitched] = useState(false);
    const [onSwitch, setOnSwitch] = useState(false);
  
    return (
      <Stack spacing="lg" align="horizontal">
          <Switch checked={isOn} onSwitch={() => setIsOn(!isOn)} />
          <Switch
            checked={switched}
            color={colors.red[500]}
            checkedColor={colors.green[500]}
            onSwitch={() => setSwitched(!switched)}
          />
          <Switch
            checked={onSwitch}
            color={colors.neutral[600]}
            checkedColor={colors.yellow[500]}
            onSwitch={() => setOnSwitch(!onSwitch)}
          />
        </Stack>
    );
  };
      `,
};
