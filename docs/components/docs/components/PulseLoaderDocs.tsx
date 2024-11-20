import ComponentsBadge from "../../custom/ComponentsBadge";
import ApiReference from "../../custom/docs/ApiReference";
import DocsBox from "../../custom/docs/Box";
import HeaderText from "../../custom/docs/HeaderText";
import PulseLoadExample from "../../example/loader/PulseLoader";
import DocsLayout from "../../layout/DocsLayout";
import { pulseLoaderRef } from "../../../data/reference/loaders";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider, SpaceTop } from "../../../styles/global";
import React from "react";

const PulseLoaderDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader>PulseLoader</LargeTextHeader>
        <DocText onHeader> A sleek animation in pulse format.</DocText>
      </DocsBox>
      <Divider style={{ marginTop: 10 }} />
      <SpaceTop marginTop="lg" />
      <DocsBox>
        <PulseLoadExample />
      </DocsBox>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>PulseLoader</ComponentsBadge> component, which allows
          you to customize its appearance and behavior.
        </DocText>
        <ApiReference reference={pulseLoaderRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default PulseLoaderDocs;
