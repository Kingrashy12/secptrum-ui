"use client";

import ComponentsBadge from "../../custom/ComponentsBadge";
import ApiReference from "../../custom/docs/ApiReference";
import HeaderText from "../../custom/docs/HeaderText";
import NormalInfo from "../../custom/docs/NormalInfo";
import BasicToast from "../../example/feedback/toast/Basic";
import PositionToast from "../../example/feedback/toast/Position";
import ToasterConfig from "../../example/feedback/toast/ToasterConfig";
import ToasterConfigTs from "../../example/feedback/toast/ToasterConfigTs";
import TransitionsToast from "../../example/feedback/toast/Transitions";
import ToastTypes from "../../example/feedback/toast/Types";
import DocsLayout from "../../layout/DocsLayout";
import { toastRef } from "../../../data/reference/toast";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider } from "../../../styles/global";
import React from "react";
import { Box } from "secptrum-ui";

const ToastDocs = () => {
  return (
    <DocsLayout>
      <Box direction="column" spacing="md" width="100%">
        <LargeTextHeader>Toast</LargeTextHeader>
        <DocText onHeader>
          A lightweight notification designed to give users feedback without
          interrupting their workflow.
        </DocText>
      </Box>
      <Divider style={{ margin: "12px" }} />
      <BasicToast />
      <NormalInfo style={{ marginTop: 20 }}>
        <DocText>
          To use the <ComponentsBadge>toast</ComponentsBadge> functionality, you
          must import and render the <ComponentsBadge>Toaster</ComponentsBadge>{" "}
          component in your root layout or main file.
        </DocText>
      </NormalInfo>
      <Box direction="column" spacing="md" id="usage">
        <HeaderText id="usage">Usage</HeaderText>
      </Box>
      <Box direction="column" spacing="md" id="javascript">
        <HeaderText id="javascript" as="h3">
          JavaScript
        </HeaderText>
        <ToasterConfig />
      </Box>
      <Box direction="column" spacing="md" id="typescript">
        <HeaderText id="typescript" as="h3">
          TypeScript
        </HeaderText>
        <ToasterConfigTs />
      </Box>
      <Box direction="column" spacing="md" id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </Box>
      <Box direction="column" spacing="md" id="types">
        <HeaderText id="types" as="h3">
          Types
        </HeaderText>
        <DocText>Below is an example of each toast type</DocText>
        <ToastTypes />
      </Box>
      <Box direction="column" spacing="md" id="position">
        <HeaderText id="position" as="h3">
          Position
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>position</ComponentsBadge> prop to change
          toast position
        </DocText>
        <PositionToast />
      </Box>
      <Box direction="column" spacing="md" id="transition">
        <HeaderText id="transition" as="h3">
          Transition
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>transition</ComponentsBadge> prop to change
          toast transition effect
        </DocText>
        <TransitionsToast />
      </Box>
      <Box direction="column" spacing="md" id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>

        <ApiReference reference={toastRef} />
      </Box>
    </DocsLayout>
  );
};

export default ToastDocs;
