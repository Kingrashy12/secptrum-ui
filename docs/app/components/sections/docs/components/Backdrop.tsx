'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import DocsLayout from '@/components/layout/DocsLayout';
import BasicDrop from '@/components/preview/backdrop/Basic';
import { dropCode } from '@/data/code/backdrop';
import { backdropRef } from '@/data/reference/backdrop';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import { Divider } from '@/styles/global';
import React from 'react';

const Backdrop = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Backdrop</LargeTextHeader>
        <BodyText>
          The Backdrop component is used to provide a dimmed background to focus
          attention on a particular task or content, typically paired with
          modals, side drawers, or loading indicators.
        </BodyText>
      </TextContent_Wrap>
      <Divider />
      <TextContent_Wrap id="example">
        <HeaderText id="example">Example</HeaderText>
        <BodyText>
          The demo below shows a basic Backdrop with a CircleLoader component in
          the foreground to indicate a loading state.
        </BodyText>
      </TextContent_Wrap>
      <BasicDrop code={dropCode.basic} />

      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          See the comprehensive guide below for a complete reference to all of
          the props available to the <ComponentsBadge>Backdrop</ComponentsBadge>{' '}
          components.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={backdropRef} />
    </DocsLayout>
  );
};

export default Backdrop;
