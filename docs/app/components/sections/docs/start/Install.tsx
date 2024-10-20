import TextContent from "@/components/custom/docs/TextContent";
import { Divider, SpaceTop } from "@/styles/global";
import React from "react";
import DocsLayout from "@/components/layout/DocsLayout";
import { BodyText, TextContent_Wrap } from "@/styles/docs/start.styled";
import HeaderText from "@/components/custom/docs/HeaderText";
import { styled } from "styled-chroma";
import ContentWithOptions from "@/components/custom/code/ContentWithOptions";
// import Link from 'next/link';
import PreviewCard from "@/components/custom/docs/PreviewCard";
import { usageCode } from "@/data/code/usage";
import ComponentsBadge from "@/components/custom/ComponentsBadge";
import NormalInfo from "@/components/custom/docs/NormalInfo";
import ModeProviderExample from "@/components/example/mode/ModeProviderExample";
import LayoutWrap from "@/components/example/mode/LayoutWrap";
import SingleModeLayout from "@/components/example/mode/SingleModeLayout";

const Install = () => {
  return (
    <DocsLayout>
      <TextContent
        mediumHeader="Installation"
        id="installation"
        isMedium
        bodyText="Everything you need to set up Secptrum UI"
      />
      <Divider />
      <TextContent_Wrap id="prerequisites">
        <HeaderText id="prerequisites">Prerequisites</HeaderText>
        <BodyText>Before installing SecptrumUI, ensure you have:</BodyText>
        <PrerequisitesList>
          <li>
            React <span>&gt;= 18</span>
          </li>
          <li>
            ReactDom <span>&gt;= 18</span>
          </li>
        </PrerequisitesList>
      </TextContent_Wrap>
      <TextContent_Wrap id="installation-secptrum-ui">
        <HeaderText id="installation-secptrum-ui">
          Install SecptrumUI
        </HeaderText>
        <BodyText>
          You can install Secptrum UI using your favorite package manager.
        </BodyText>
      </TextContent_Wrap>
      <SpaceTop />
      <ContentWithOptions
        hasOptions
        firstOpt="npm"
        secondOpt="pnpm"
        thirdOpt="yarn"
        firstCmd="npm install"
        secondCmd="pnpm add"
        thirdCmd="yarn add"
        code="secptrum-ui"
      />
      <TextContent_Wrap id="usage">
        <HeaderText id="Usage">Usage</HeaderText>
        <BodyText>
          Learn the basics of working with Secptrum UI components.
        </BodyText>
        <BodyText>
          Below are few examples of how to use the components in your project:
        </BodyText>
      </TextContent_Wrap>
      <PreviewCard code={usageCode.quickStart} />
      <TextContent_Wrap id="mode-provider">
        <HeaderText id="mode-provider">ModeProvider</HeaderText>
        <BodyText>
          Secptrum UI components are designed to work with light and dark modes.
          To control the theme of Spectrum UI components across your
          application, you can use the{" "}
          <ComponentsBadge>ModeProvider</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <TextContent_Wrap>
        <BodyText>
          Below are few examples of how to implement the{" "}
          <ComponentsBadge>ModeProvider</ComponentsBadge> in your project:
        </BodyText>
        <ModeProviderExample />
      </TextContent_Wrap>
      <TextContent_Wrap id="using-mode-provider">
        <HeaderText id="using-mode-provider">Using ModeProvider</HeaderText>
        <BodyText>
          Below you&apos;ll find examples of how to use the{" "}
          <ComponentsBadge>ModeProvider</ComponentsBadge> in your project layout
        </BodyText>
        <LayoutWrap />
      </TextContent_Wrap>
      <SpaceTop marginBottom="lg" />
      <NormalInfo>
        <BodyText>
          If your application uses a single theme (either{" "}
          <ComponentsBadge>light</ComponentsBadge> or{" "}
          <ComponentsBadge>dark</ComponentsBadge>), you can pass the mode prop
          directly to the <ComponentsBadge>ModeProvider</ComponentsBadge>{" "}
          component to ensure consistency with components theme.
        </BodyText>
      </NormalInfo>
      <TextContent_Wrap id="using-mode-provider:single-mode">
        <HeaderText id="using-mode-provider:single-mode">
          Using ModeProvide: Single mode
        </HeaderText>
        <BodyText>
          Below you&apos;ll find examples of how to use the{" "}
          <ComponentsBadge>ModeProvider</ComponentsBadge> with a single mode,
          either
          <ComponentsBadge>light</ComponentsBadge> or{" "}
          <ComponentsBadge>dark</ComponentsBadge>
        </BodyText>
      </TextContent_Wrap>
      <SingleModeLayout />
    </DocsLayout>
  );
};

export default Install;

const PrerequisitesList = styled("ul")`
  list-style: none;
  padding-left: 10px;

  li {
    position: relative;
    padding-left: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors?.text};
    &::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  span {
    background: ${({ theme }) => theme.colors?.prop};
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    /* color: white; */
  }
`;
