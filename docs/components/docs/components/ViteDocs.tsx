"use client";

import React from "react";
import DocsLayout from "../../layout/DocsLayout";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider } from "../../../styles/global";
import { Box } from "secptrum-ui";
import HeaderText from "../../custom/docs/HeaderText";
import ContentWithOptions from "../../custom/code/ContentWithOptions";
import { LangCodeTabs } from "../../custom/docs/LangCodeTabs";
import { vite_setup } from "../../../data/codes/vite_setup";
import CodeBlock from "../../custom/code/CodeBlock";
import ComponentsBadge from "../../custom/ComponentsBadge";
import Enjoy from "../../custom/docs/Enjoy";

const ViteDocs = () => {
  return (
    <DocsLayout>
      <Box direction="column" spacing="md" width="100%">
        <LargeTextHeader>Vite.js</LargeTextHeader>
        <DocText>A guide to setting up Secptrum UI with Vite.js.</DocText>
      </Box>
      <Divider style={{ margin: "12px" }} />
      <Box direction="column" id="installation" spacing="md">
        <HeaderText id="installation">Installation</HeaderText>
        <DocText>
          You can install Secptrum UI using your favorite package manager
        </DocText>
        <ContentWithOptions
          firstOpt="npm"
          secondOpt="yarn"
          thirdOpt="pnpm"
          firstCmd="npm install"
          secondCmd="yarn add"
          thirdCmd="pnpm add"
          hasOptions
          code="secptrum-ui react-icons"
        />
      </Box>
      <Box direction="column" spacing="md" id="setup-mode-provider">
        <HeaderText id="setup-mode-provider">Setup ModeProvider</HeaderText>
        <DocText>
          Below is an example of how to configure the mode in your project.
        </DocText>
      </Box>
      <Box direction="column" spacing="md" id="mode-provider">
        <HeaderText id="mode-provider" as="h3">
          ModeProvider
        </HeaderText>
        <LangCodeTabs
          tsCode={vite_setup.setup_mode_provider.mode_tsx}
          jsCode={vite_setup.setup_mode_provider.mode_js}
        />
      </Box>
      <Box direction="column" spacing="md" id="usage">
        <HeaderText id="usage" as="h3">
          Usage
        </HeaderText>
        <DocText>
          Wrap your application in the{" "}
          <ComponentsBadge>ThemeProvider</ComponentsBadge> and{" "}
          <ComponentsBadge>ModeProvider</ComponentsBadge> components to use the
          mode provider.
        </DocText>
        <CodeBlock code={vite_setup.setup_mode_provider.usage} />
      </Box>
      <Box direction="column" spacing="md" id="single-mode">
        <HeaderText id="single-mode" as="h3">
          Single Mode
        </HeaderText>
        <DocText>
          If you want to use a single mode, you can import the{" "}
          <ComponentsBadge>ModeProvider</ComponentsBadge> component directly
          from <ComponentsBadge>&quot;secptrum-ui&quot;</ComponentsBadge> and
          pass the mode to it.
        </DocText>
        <CodeBlock code={vite_setup.setup_mode_provider.single_mode} />
      </Box>
      <Enjoy />
    </DocsLayout>
  );
};

export default ViteDocs;
