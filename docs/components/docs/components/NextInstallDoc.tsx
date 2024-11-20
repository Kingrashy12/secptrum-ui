"use client";
import NextSetup from "../../example/next/NextSetup";
import DocsLayout from "../../layout/DocsLayout";
import { DocText } from "../../../styles/docs/docs.styled";
import { LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider } from "../../../styles/global";
import React from "react";
import { Box } from "secptrum-ui";

const NextInstallDoc = () => {
  return (
    <DocsLayout>
      <Box direction="column" spacing="md" width="100%">
        <LargeTextHeader>Next.js</LargeTextHeader>
        <DocText>
          Everything you need to set up Secptrum UI with Next.js.
        </DocText>
      </Box>
      <Divider style={{ margin: "12px" }} />
      <NextSetup />
    </DocsLayout>
  );
};

export default NextInstallDoc;
