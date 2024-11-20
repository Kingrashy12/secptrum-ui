import ComponentsBadge from "@/components/custom/ComponentsBadge";
import ApiReference from "@/components/custom/docs/ApiReference";
import DocsBox from "@/components/custom/docs/Box";
import HeaderText from "@/components/custom/docs/HeaderText";
import CircleLoaderExample from "@/components/example/loader/CircleLoader";
import DocsLayout from "@/components/layout/DocsLayout";
import { circleloaderRef } from "@/data/reference/loaders";
import { DocText, LargeTextHeader } from "@/styles/docs/docs.styled";
import { Divider, SpaceTop } from "@/styles/global";
import React from "react";

const CircleLoaderDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader>CircleLoader</LargeTextHeader>
        <DocText onHeader>
          Loading spinner. It&apos;s designed to visually indicate loading
          states
        </DocText>
      </DocsBox>
      <Divider style={{ marginTop: 10 }} />
      <SpaceTop marginTop="lg" />
      <DocsBox>
        <CircleLoaderExample />
      </DocsBox>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>CircleLoader</ComponentsBadge> component, which
          allows you to customize its appearance and behavior.
        </DocText>
        <ApiReference reference={circleloaderRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default CircleLoaderDocs;
