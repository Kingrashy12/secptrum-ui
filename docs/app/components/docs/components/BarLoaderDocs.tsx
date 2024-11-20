import ComponentsBadge from "@/components/custom/ComponentsBadge";
import ApiReference from "@/components/custom/docs/ApiReference";
import DocsBox from "@/components/custom/docs/Box";
import HeaderText from "@/components/custom/docs/HeaderText";
import BarLoadExample from "@/components/example/loader/BarLoadExample";
import DocsLayout from "@/components/layout/DocsLayout";
import { barloaderRef } from "@/data/reference/loaders";
import { DocText, LargeTextHeader } from "@/styles/docs/docs.styled";
import { Divider, SpaceTop } from "@/styles/global";
import React from "react";

const BarLoaderDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader>BarLoader</LargeTextHeader>
        <DocText onHeader> Horizontal loading indicator</DocText>
      </DocsBox>
      <Divider style={{ marginTop: 10 }} />
      <SpaceTop marginTop="lg" />
      <DocsBox>
        <BarLoadExample />
      </DocsBox>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>BarLoader</ComponentsBadge> component, which allows
          you to customize its appearance and behavior.
        </DocText>
        <ApiReference reference={barloaderRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default BarLoaderDocs;
