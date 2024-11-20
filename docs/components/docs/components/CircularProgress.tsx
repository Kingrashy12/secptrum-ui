import ComponentsBadge from "../../custom/ComponentsBadge";
import ApiReference from "../../custom/docs/ApiReference";
import DocsBox from "../../custom/docs/Box";
import HeaderText from "../../custom/docs/HeaderText";
import CircularProgressExample from "../../example/loader/CircularProgressExample";
import DocsLayout from "../../layout/DocsLayout";
import { circularProgressRef } from "../../../data/reference/loaders";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider, SpaceTop } from "../../../styles/global";
import React from "react";

const CircularProgressDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader>CircularProgress</LargeTextHeader>
        <DocText onHeader> Circular loading indicator</DocText>
      </DocsBox>
      <Divider style={{ marginTop: 10 }} />
      <SpaceTop marginTop="lg" />
      <DocsBox>
        <CircularProgressExample />
      </DocsBox>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>CircularProgress</ComponentsBadge> component, which
          allows you to customize its appearance and behavior.
        </DocText>
        <ApiReference reference={circularProgressRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default CircularProgressDocs;
