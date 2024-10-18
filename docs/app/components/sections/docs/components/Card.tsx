'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import DocsLayout from '@/components/layout/DocsLayout';
import CardExample from '@/components/preview/card/Example';
import ProductCard from '@/components/preview/card/ProductCard';
import { cardCodes } from '@/data/code/card';
import { cardRef } from '@/data/reference/card';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import { Divider } from '@/styles/global';
import React from 'react';

const Card_Page = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Card</LargeTextHeader>
        <BodyText>
          The <ComponentsBadge>Card</ComponentsBadge> component builds on top of
          the <ComponentsBadge>Box</ComponentsBadge>
          component, inheriting its flexible layout properties while adding
          additional functionality. It provides an easy way to display content
          in a structured, styled container with support for theming and layout
          customization.
        </BodyText>
        <BodyText>
          As it extends the <ComponentsBadge>Box</ComponentsBadge> component,
          the <ComponentsBadge>Card</ComponentsBadge> has access to all{' '}
          <ComponentsBadge>Box</ComponentsBadge> props, while introducing
          additional features like shadows, borders, and theme integration.
        </BodyText>
      </TextContent_Wrap>
      <Divider style={{ marginBottom: 17 }} />
      <CardExample code={cardCodes.ex} />
      <TextContent_Wrap id="product-card">
        <HeaderText id="product-card">Product Card</HeaderText>
        <BodyText>
          Below is an example using mock products to showcase how the{' '}
          <ComponentsBadge>Card</ComponentsBadge> component can be used for
          product presentation.
        </BodyText>
      </TextContent_Wrap>
      <ProductCard code={cardCodes.products} />
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          This section provides a concise overview of all the props available
          for the <ComponentsBadge>Card</ComponentsBadge> component, making it
          easy to understand how each prop affects the card&apos;s behavior and
          appearance.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={cardRef} />
    </DocsLayout>
  );
};

export default Card_Page;
