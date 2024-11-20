import ComponentsBadge from "@/components/custom/ComponentsBadge";
import ApiReference from "@/components/custom/docs/ApiReference";
import DocsBox from "@/components/custom/docs/Box";
import HeaderText from "@/components/custom/docs/HeaderText";
import AlignStack from "@/components/example/layout/stack/Align";
import BasicStack from "@/components/example/layout/stack/Basic";
import DocsLayout from "@/components/layout/DocsLayout";
import { stackRef } from "@/data/reference/stack";
import { DocText, LargeTextHeader } from "@/styles/docs/docs.styled";
import { Divider, SpaceTop } from "@/styles/global";
import React from "react";

const StackDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader as="h1">Stack</LargeTextHeader>
        <DocText>
          The <ComponentsBadge>Stack</ComponentsBadge> component is a layout
          utility designed to arrange elements in a row or column with
          customizable spacing. It builds on the flexibility of{" "}
          <ComponentsBadge>Box</ComponentsBadge> and provides additional layout
          control, making it easy to stack elements either horizontally or
          vertically.
        </DocText>
      </DocsBox>
      <Divider style={{ marginTop: 10 }} />
      <SpaceTop marginTop="lg" />
      <DocsBox id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </DocsBox>
      <DocsBox id="basic">
        <HeaderText id="basic" as="h3">
          Basic
        </HeaderText>
        <DocText>
          The Stack component acts as a generic container, wrapping around the
          elements to be arranged. Below is an example of a basic{" "}
          <ComponentsBadge>Stack</ComponentsBadge>
        </DocText>
        <BasicStack />
      </DocsBox>

      <DocsBox id="horizontal">
        <HeaderText id="horizontal" as="h3">
          Horizontal
        </HeaderText>
        <DocText>
          This example shows how to align contents horizontally (side-by-side).
        </DocText>
        <AlignStack />
      </DocsBox>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          Below is a table detailing the available props for the{" "}
          <ComponentsBadge>Stack</ComponentsBadge> component.
        </DocText>

        <ApiReference reference={stackRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default StackDocs;
