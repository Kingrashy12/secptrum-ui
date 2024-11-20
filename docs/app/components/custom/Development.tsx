import React from "react";
import { Stack } from "secptrum-ui";
import Media from "./Media";
import { UnderDevSvg } from "@/assets";
import { DocText } from "@/styles/docs/docs.styled";

const Development = () => {
  return (
    <Stack fullWidth>
      <Media src={UnderDevSvg} width={200} height={200} />
      <DocText>This page is under development</DocText>
    </Stack>
  );
};

export default Development;
