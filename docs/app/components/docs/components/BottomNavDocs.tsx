import ComponentsBadge from "@/components/custom/ComponentsBadge";
import ApiReference from "@/components/custom/docs/ApiReference";
import DocsBox from "@/components/custom/docs/Box";
import HeaderText from "@/components/custom/docs/HeaderText";
import NormalInfo from "@/components/custom/docs/NormalInfo";
import BottomNavExample from "@/components/example/navigation/bottom-nav/BottomNavExample";
import Bn_Rounded from "@/components/example/navigation/bottom-nav/RoundedBottomNav";
import BN_WideBottom from "@/components/example/navigation/bottom-nav/WideBottomNav";
import DocsLayout from "@/components/layout/DocsLayout";
import { bottomnavRef, bottomnavTabRef } from "@/data/reference/bottomnav";
import { DocText, LargeTextHeader } from "@/styles/docs/docs.styled";
import { Divider, SpaceTop } from "@/styles/global";
import React from "react";

const BottomNavDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader as="h1">Bottom Navigation</LargeTextHeader>
        <DocText onHeader>
          A customizable bottom navigation bar, perfect for displaying
          navigation options at the bottom of the screen.
        </DocText>
      </DocsBox>
      <SpaceTop marginTop="xl" />
      <Divider />
      <DocsBox marginTop="xl">
        <SpaceTop marginTop="xl" />
        <BottomNavExample />
      </DocsBox>
      <DocsBox id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </DocsBox>
      <DocsBox id="variants">
        <HeaderText id="variants">Variants</HeaderText>
        <DocText>
          The BottomNav component comes in the following variants:{" "}
          <ComponentsBadge>full</ComponentsBadge> ,{" "}
          <ComponentsBadge>rounded</ComponentsBadge> ,{" "}
          <ComponentsBadge>wide</ComponentsBadge>
        </DocText>
      </DocsBox>
      <DocsBox id="rounded">
        <HeaderText id="rounded" as="h3">
          Rounded
        </HeaderText>
        <Bn_Rounded />
      </DocsBox>
      <DocsBox id="wide">
        <HeaderText id="wide" as="h3">
          Wide
        </HeaderText>
        <BN_WideBottom />
      </DocsBox>
      <SpaceTop marginTop="3xl" />
      <NormalInfo>
        <DocText>
          The <ComponentsBadge>BottomNav</ComponentsBadge> Components is
          designed to be used as a bottom navigation bar only on mobile devices.
        </DocText>
      </NormalInfo>
      <DocsBox id="api-reference-bottomnav" spacing="lg">
        <HeaderText id="api-reference-bottomnav">
          API Reference: BottomNav
        </HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>BottomNav</ComponentsBadge> component, which allows
          you to customize its appearance and behavior.
        </DocText>
        <ApiReference reference={bottomnavRef} />
      </DocsBox>
      <DocsBox id="api-reference-bottomnavtab" spacing="lg">
        <HeaderText id="api-reference-bottomnavtab">
          API Reference: BottomNavTab
        </HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>BottomNavTab</ComponentsBadge> component, which
          allows you to customize its appearance and behavior.
        </DocText>
        <ApiReference reference={bottomnavTabRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default BottomNavDocs;
