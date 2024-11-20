"use client";

import ComponentsBadge from "../../custom/ComponentsBadge";
import ApiReference from "../../custom/docs/ApiReference";
import HeaderText from "../../custom/docs/HeaderText";
import BasicSwitch from "../../example/inputs/switch/Basic";
import DisabledSwitch from "../../example/inputs/switch/DisabledSwitch";
import SwitchSizes from "../../example/inputs/switch/Size";
import SwitchColors from "../../example/inputs/switch/SwitchColors";
import DocsLayout from "../../layout/DocsLayout";
import { switchRef } from "../../../data/reference/switch";
import showLoader from "../../../hooks/showLoader";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider } from "../../../styles/global";
import React from "react";
import { Box } from "secptrum-ui";

const SwitchDocs = () => {
  showLoader();
  return (
    <DocsLayout>
      <Box direction="column" spacing="md">
        <LargeTextHeader>Switch</LargeTextHeader>
        <DocText>Toggle between options</DocText>
      </Box>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <BasicSwitch />
      <Box direction="column" spacing="md" id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </Box>
      <Box direction="column" spacing="md" id="size">
        <HeaderText id="size" as="h3">
          Size
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>size</ComponentsBadge> prop to change the
          switch size
        </DocText>
        <SwitchSizes />
      </Box>
      <Box direction="column" spacing="md" id="color">
        <HeaderText id="color" as="h3">
          Color
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>color</ComponentsBadge> prop to change the
          switch color when active
        </DocText>
        <SwitchColors />
      </Box>
      <Box direction="column" spacing="md" id="disabled">
        <HeaderText id="disabled" as="h3">
          Disabled
        </HeaderText>
        <DisabledSwitch />
      </Box>
      <Box direction="column" spacing="md" id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          Below is a table detailing the available props for the{" "}
          <ComponentsBadge>Switch</ComponentsBadge> Component
        </DocText>

        <ApiReference reference={switchRef} />
      </Box>
    </DocsLayout>
  );
};

export default SwitchDocs;
