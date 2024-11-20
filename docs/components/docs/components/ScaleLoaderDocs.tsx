import ComponentsBadge from "../../custom/ComponentsBadge";
import ApiReference from "../../custom/docs/ApiReference";
import DocsBox from "../../custom/docs/Box";
import HeaderText from "../../custom/docs/HeaderText";
import ScaleLoadExample from "../../example/loader/ScaleLoader";
import DocsLayout from "../../layout/DocsLayout";
import { scaleLoaderRef } from "../../../data/reference/loaders";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider, SpaceTop } from "../../../styles/global";
import React from "react";

const ScaleLoaderDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader>ScaleLoader</LargeTextHeader>
        <DocText onHeader> A scale loading indicator</DocText>
      </DocsBox>
      <Divider style={{ marginTop: 10 }} />
      <SpaceTop marginTop="lg" />
      <DocsBox>
        <ScaleLoadExample />
      </DocsBox>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>ScaleLoader</ComponentsBadge> component, which allows
          you to customize its appearance and behavior.
        </DocText>
        <ApiReference reference={scaleLoaderRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default ScaleLoaderDocs;
