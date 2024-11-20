import React, { useState } from "react";
import { Card, Stack, Switch } from "secptrum-ui";

const BasicSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Card fullWidth style={{ height: 100 }}>
      <Stack>
        <Switch checked={isOn} onSwitch={() => setIsOn(!isOn)} />
      </Stack>
    </Card>
  );
};

export default BasicSwitch;
