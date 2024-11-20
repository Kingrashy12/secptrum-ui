import ComponentsBadge from "../../custom/ComponentsBadge";
import ApiReference from "../../custom/docs/ApiReference";
import DocsBox from "../../custom/docs/Box";
import HeaderText from "../../custom/docs/HeaderText";
import BoxExample from "../../example/layout/box/Example";
import BoxLay from "../../example/layout/box/LayoutFlex";
import DocsLayout from "../../layout/DocsLayout";
import { boxRef } from "../../../data/reference/box";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider, SpaceTop } from "../../../styles/global";
import React from "react";

const BoxDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader as="h1">Box</LargeTextHeader>
        <DocText onHeader>
          The <ComponentsBadge>Box</ComponentsBadge> component is a flexible,
          extensible container built using Flexbox and designed to extend the
          HTML <ComponentsBadge>div</ComponentsBadge>
          element. It provides additional props for managing spacing, layout,
          and alignment, allowing for easy customization and responsive design.
        </DocText>
      </DocsBox>
      <SpaceTop marginTop="lg" />
      <Divider style={{ marginTop: 10 }} />
      <DocsBox id="examples">
        <HeaderText id="examples">Example</HeaderText>
        <DocText>
          Here is an example of how to use the{" "}
          <ComponentsBadge>Box</ComponentsBadge> component with various spacing
          and layout
        </DocText>
        <BoxExample />
      </DocsBox>
      <DocsBox id="layout-flexibility">
        <HeaderText id="layout-flexibility" as="h3">
          Layout Flexibility
        </HeaderText>
        <DocText>
          In the example below, The{" "}
          <ComponentsBadge>direction=&apos;row&apos;</ComponentsBadge> sets a
          horizontal layout. with the{" "}
          <ComponentsBadge>centered</ComponentsBadge> allowing contents to be
          horizontally and vertically centered.
        </DocText>
        <BoxLay />
      </DocsBox>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          This component extends the <ComponentsBadge>div</ComponentsBadge>
          element and accepts all its props.
        </DocText>

        <ApiReference reference={boxRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default BoxDocs;
