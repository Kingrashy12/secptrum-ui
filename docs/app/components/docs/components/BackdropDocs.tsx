"use client";

import { Box } from "secptrum-ui";
import DocsLayout from "@/components/layout/DocsLayout";
import React from "react";
import { DocText, LargeTextHeader } from "@/styles/docs/docs.styled";
import { Divider } from "@/styles/global";
import HeaderText from "@/components/custom/docs/HeaderText";
import BasicDrop from "@/components/example/overlay/backdrop/basic";
import ComponentsBadge from "@/components/custom/ComponentsBadge";
import ApiReference from "@/components/custom/docs/ApiReference";
import { backdropRef } from "@/data/reference/backdrop";

const BackdropDocs = () => {
  return (
    <DocsLayout>
      <Box direction="column" spacing="md" width="100%">
        <LargeTextHeader>Backdrop</LargeTextHeader>
        <DocText onHeader>
          A dimmed background that focuses attention on a specific task or piece
          of content.
        </DocText>
      </Box>
      <Divider style={{ margin: "12px" }} />
      <Box direction="column" spacing="md" id="usage">
        <HeaderText id="usage">Usage</HeaderText>
        <DocText>
          The demo below shows a basic Backdrop with a CircularProgress
          component in the foreground to indicate a loading state.
        </DocText>
        <BasicDrop />
      </Box>
      <Box direction="column" spacing="md" id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          See the comprehensive guide below for a complete reference to all of
          the props available to the <ComponentsBadge>Backdrop</ComponentsBadge>{" "}
          components.
        </DocText>

        <ApiReference reference={backdropRef} />
      </Box>
    </DocsLayout>
  );
};

export default BackdropDocs;
