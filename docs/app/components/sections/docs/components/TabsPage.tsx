"use client";

import DocsLayout from "@/components/layout/DocsLayout";
import { tabsCode } from "@/data/code/tabs";
import BasicTabs from "@/components/example/layout/BasicTabs";
import DisabledTab from "@/components/example/layout/DisabledTab";
import FullWidthTabs from "@/components/example/layout/FullWidthTabs";
import SolidVariantTabs from "@/components/example/layout/SolidTabs";
import TabsWithIcons from "@/components/example/layout/TabsWithIcon";
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import { Divider, SpaceTop } from "@/styles/global";
import React from "react";
import ComponentsBadge from "@/components/custom/ComponentsBadge";
import HeaderText from "@/components/custom/docs/HeaderText";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import { tabsHandleRef, tabsRef } from "@/data/reference/tabs";
const Tabs_Page = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Tabs</LargeTextHeader>
        <BodyText>Switch contents in same area.</BodyText>
      </TextContent_Wrap>
      <TextContent_Wrap id="basic">
        <HeaderText id="basic">Basic</HeaderText>
        <Divider style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <BasicTabs code={tabsCode.basic} />
      <TextContent_Wrap id="solid-variant">
        <HeaderText id="solid-variant">Solid Variant</HeaderText>
        <Divider style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <SolidVariantTabs code={tabsCode.solid} />
      <TextContent_Wrap id="disabled-tab">
        <HeaderText id="disabled-tab">Disabled Tab</HeaderText>
        <Divider style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <DisabledTab code={tabsCode.disabled} />
      <TextContent_Wrap id="tabs-with-icon">
        <HeaderText id="tabs-with-icon">Tabs with icons</HeaderText>
        <Divider style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <TabsWithIcons code={tabsCode.icons} />
      <TextContent_Wrap id="full-width-tabs">
        <HeaderText id="full-width-tabs">
          Tabs with <ComponentsBadge>fullWidth</ComponentsBadge>
        </HeaderText>
        <Divider style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <FullWidthTabs code={tabsCode.fullWidth} />
      <TextContent_Wrap id="api-reference:tabs">
        <HeaderText id="api-reference:tabs">API Reference: Tabs</HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>Tabs</ComponentsBadge> component.
        </BodyText>
        <ReferenceTable reference={tabsRef} />
      </TextContent_Wrap>
      <Divider style={{ marginTop: 25 }} />
      <TextContent_Wrap id="api-reference:tabshandle">
        <HeaderText id="api-reference:tabshandle">
          API Reference: TabsHandle
        </HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>TabsHandle</ComponentsBadge> component.
        </BodyText>
        <ReferenceTable reference={tabsHandleRef} />
      </TextContent_Wrap>
      <Divider style={{ marginTop: 25 }} />
      <TextContent_Wrap id="api-reference:tabpanel">
        <SpaceTop marginTop="xl" />
        <HeaderText id="api-reference:tabpanel">
          API Reference: TabPanel
        </HeaderText>
        <BodyText>
          This is a simple wrapper around a standard HTML{" "}
          <ComponentsBadge>div</ComponentsBadge> element, used to display the
          content associated with the active tab. It does not accept any
          additional props beyond the standard HTML attributes.
        </BodyText>
      </TextContent_Wrap>
    </DocsLayout>
  );
};

export default Tabs_Page;
