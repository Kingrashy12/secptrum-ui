import ComponentsBadge from "../../custom/ComponentsBadge";
import ApiReference from "../../custom/docs/ApiReference";
import DocsBox from "../../custom/docs/Box";
import HeaderText from "../../custom/docs/HeaderText";
import BasicTabs from "../../example/navigation/tabs/BasicTabs";
import DisabledTab from "../../example/navigation/tabs/DisabledTab";
import FullWidthTabs from "../../example/navigation/tabs/FullWidthTabs";
import SolidVariantTabs from "../../example/navigation/tabs/SolidTabs";
import TabsWithIcons from "../../example/navigation/tabs/TabsWithIcon";
import DocsLayout from "../../layout/DocsLayout";
import { tabsHandleRef, tabsRef } from "../../../data/reference/tabs";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider, SpaceTop } from "../../../styles/global";
import React from "react";

const TabsDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader as="h1">Tabs</LargeTextHeader>
        <DocText onHeader>Switch contents in same area.</DocText>
      </DocsBox>
      <Divider style={{ marginTop: 12 }} />
      <DocsBox id="usage">
        <HeaderText id="usage">Usage</HeaderText>
        <Divider style={{ marginBottom: 10 }} />
        <BasicTabs />
      </DocsBox>
      <DocsBox id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </DocsBox>
      <DocsBox id="solid-variant">
        <HeaderText id="solid-variant" as="h3">
          Solid Variant
        </HeaderText>
        <Divider style={{ marginBottom: 10 }} />
        <SolidVariantTabs />
      </DocsBox>
      <DocsBox id="disabled-tab">
        <HeaderText id="disabled-tab" as="h3">
          Disabled Tab
        </HeaderText>
        <Divider style={{ marginBottom: 10 }} />
        <DisabledTab />
      </DocsBox>
      <DocsBox id="tabs-with-icon">
        <HeaderText id="tabs-with-icon" as="h3">
          Tabs with icons
        </HeaderText>
        <Divider style={{ marginBottom: 10 }} />
        <TabsWithIcons />
      </DocsBox>
      <DocsBox id="full-width-tabs">
        <HeaderText id="full-width-tabs" as="h3">
          Tabs with <ComponentsBadge>fullWidth</ComponentsBadge>
        </HeaderText>
        <Divider style={{ marginBottom: 10 }} />
        <FullWidthTabs />
      </DocsBox>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>Tabs</ComponentsBadge> component.
        </DocText>
        <ApiReference reference={tabsRef} />
      </DocsBox>
      <Divider style={{ marginTop: 25 }} />
      <DocsBox id="api-reference:tabhandle">
        <HeaderText id="api-reference:tabhandle">
          API Reference: TabHandle
        </HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>TabsHandle</ComponentsBadge> component.
        </DocText>
        <ApiReference reference={tabsHandleRef} />
      </DocsBox>
      <Divider style={{ marginTop: 25 }} />
      <DocsBox id="api-reference:tabpanel">
        <SpaceTop marginTop="xl" />
        <HeaderText id="api-reference:tabpanel">
          API Reference: TabPanel
        </HeaderText>
        <DocText>
          This is a simple wrapper around a standard HTML{" "}
          <ComponentsBadge>div</ComponentsBadge> element, used to display the
          content associated with the active tab. It does not accept any
          additional props beyond the standard HTML attributes.
        </DocText>
      </DocsBox>
    </DocsLayout>
  );
};

export default TabsDocs;
