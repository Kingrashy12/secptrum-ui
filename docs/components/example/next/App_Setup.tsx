import CodeBlock from "../../custom/code/CodeBlock";
import ContentWithOptions from "../../custom/code/ContentWithOptions";
import ComponentsBadge from "../../custom/ComponentsBadge";
import HeaderText from "../../custom/docs/HeaderText";
import { LangCodeTabs } from "../../custom/docs/LangCodeTabs";
import NormalInfo from "../../custom/docs/NormalInfo";
import { next_setup } from "../../../data/codes/next_setup";
import { DocText } from "../../../styles/docs/docs.styled";
import { Divider } from "../../../styles/global";
import React from "react";
import { Box, TabPanel, Tabs, TabHandle } from "secptrum-ui";

const App_Setup = () => {
  return (
    <>
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
      <Box id="initial-setup" direction="column" spacing="md">
        <HeaderText id="initial-setup">Setup Secptrum UI</HeaderText>
        <DocText>
          After the installation, you need to set up Secptrum UI registry in
          your Next.js project.
        </DocText>
      </Box>
      <Box direction="column" spacing="md" id="initialize-registry">
        <HeaderText id="initialize-registry" as="h3">
          Initialize the registry file
        </HeaderText>
        <DocText>
          Run the following command to generate the registry file.
        </DocText>
        <ContentWithOptions
          firstOpt="npm"
          secondOpt="yarn"
          thirdOpt="pnpm"
          firstCmd="npx"
          secondCmd="yarn exec"
          thirdCmd="pnpm exec"
          hasOptions
          code="secptrum-ui init"
        />
        <DocText>
          This will create a{" "}
          <ComponentsBadge>SecptrumUIRegistry</ComponentsBadge> component in
          your project and add it to lib/registry.js or lib/registry.tsx
        </DocText>
      </Box>
      <Box direction="column" spacing="md" id="import-registry">
        <HeaderText id="import-registry" as="h3">
          Import SecptrumUIRegistry
        </HeaderText>
        <DocText>
          Finally, import the{" "}
          <ComponentsBadge>SecptrumUIRegistry</ComponentsBadge> component in
          your layout.js or layout.tsx file:
        </DocText>
        <Box direction="column" spacing="md" marginTop="lg">
          <Tabs variant="solid">
            <TabHandle value="tsx">TypeScript</TabHandle>
            <TabHandle value="js">JavaScript</TabHandle>
            <TabPanel>
              <CodeBlock code={next_setup.app_setup.tsx} />
            </TabPanel>
            <TabPanel>
              <CodeBlock code={next_setup.app_setup.js} />
            </TabPanel>
          </Tabs>
        </Box>
      </Box>
      <Box direction="column" spacing="lg" marginTop="lg">
        <DocText>
          These steps ensure that Secptrum UI components are properly registered
          and available throughout your application.
        </DocText>
        <NormalInfo>
          <DocText>
            <b>Note:</b> When using styled to customize components, you need to
            add the <ComponentsBadge>&apos;use client&apos;</ComponentsBadge>{" "}
            directive at the top of the file. Don&apos;t worry about style
            glitches, Secptrum UI Registry will handle those for you.
          </DocText>
        </NormalInfo>
      </Box>
      <Divider style={{ marginTop: "16px" }} />
      <Box direction="column" spacing="md" id="mode-provider">
        <HeaderText id="mode-provider">ModeProvider</HeaderText>
        <DocText>
          ModeProvider is a component that provides the mode context to all
          components.
        </DocText>
      </Box>

      <Box direction="column" spacing="md" id="implementation">
        <HeaderText id="implementation" as="h3">
          Implementation
        </HeaderText>
        <DocText>
          Create a <ComponentsBadge>ModeProvider</ComponentsBadge> component in
          your project and paste the code below.
        </DocText>
        <LangCodeTabs
          tsCode={next_setup.app_setup.mode_tsx}
          jsCode={next_setup.app_setup.mode_js}
        />
      </Box>
      <Box
        direction="column"
        spacing="md"
        marginTop="lg"
        id="import-mode-provider"
      >
        <HeaderText id="import-mode-provider" as="h3">
          Import ModeProvider
        </HeaderText>
        <DocText>
          Finally, import the <ComponentsBadge>ModeProvider</ComponentsBadge>{" "}
          component in your layout.js or layout.tsx along with{" "}
          <ComponentsBadge>ThemeProvider</ComponentsBadge>:
        </DocText>
        <LangCodeTabs
          tsCode={next_setup.app_setup.use_mode_tsx}
          jsCode={next_setup.app_setup.use_mode_js}
        />
      </Box>
      <Box direction="column" spacing="md" id="single-mode">
        <HeaderText id="single-mode" as="h3">
          Single Mode
        </HeaderText>
        <DocText>
          If your application has only one mode, import the{" "}
          <ComponentsBadge>ModeProvider</ComponentsBadge> component directly
          from <ComponentsBadge>&quot;secptrum-ui&quot;</ComponentsBadge> and
          pass the mode to it.
        </DocText>
        <LangCodeTabs
          tsCode={next_setup.app_setup.single_mode_tsx}
          jsCode={next_setup.app_setup.single_mode_js}
        />
      </Box>
    </>
  );
};

export default App_Setup;
