import ComponentsBadge from "@/components/custom/ComponentsBadge";
import ApiReference from "@/components/custom/docs/ApiReference";
import DocsBox from "@/components/custom/docs/Box";
import HeaderText from "@/components/custom/docs/HeaderText";
import CardExample from "@/components/example/layout/card/Example";
import ProductCard from "@/components/example/layout/card/ProductCard";
import DocsLayout from "@/components/layout/DocsLayout";
import { cardRef } from "@/data/reference/card";
import { DocText, LargeTextHeader } from "@/styles/docs/docs.styled";
import { Divider, SpaceTop } from "@/styles/global";
import React from "react";

const CardDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader as="h1">Card</LargeTextHeader>
        <DocText onHeader>
          The <ComponentsBadge>Card</ComponentsBadge> component builds on top of
          the <ComponentsBadge>Box</ComponentsBadge>
          component, inheriting its flexible layout properties while adding
          additional functionality.
        </DocText>
      </DocsBox>
      <Divider style={{ marginTop: 10 }} />
      <SpaceTop marginTop="lg" />
      <DocsBox>
        <CardExample />
      </DocsBox>
      <DocsBox id="product-card">
        <HeaderText id="product-card">Product Card</HeaderText>
        <DocText>
          Below is an example using mock products to showcase how the{" "}
          <ComponentsBadge>Card</ComponentsBadge> component can be used for
          product presentation.
        </DocText>
        <ProductCard />
      </DocsBox>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          This section provides a concise overview of all the props available
          for the <ComponentsBadge>Card</ComponentsBadge> component,
        </DocText>

        <ApiReference reference={cardRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default CardDocs;
