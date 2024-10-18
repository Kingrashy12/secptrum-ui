'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import BarLoadExample from '@/components/example/feedback/BarLoadExample';
import DocsLayout from '@/components/layout/DocsLayout';
import { barloaderRef } from '@/data/reference/loaders';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import { Divider, SpaceTop } from '@/styles/global';
import React from 'react';

const BarLoader = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">BarLoader</LargeTextHeader>
        <BodyText> Horizontal loading indicator</BodyText>
      </TextContent_Wrap>
      <Divider />
      <SpaceTop marginTop="2xl" />
      <TextContent_Wrap>
        <BarLoadExample />
      </TextContent_Wrap>
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{' '}
          <ComponentsBadge>BarLoader</ComponentsBadge> component, which allows
          you to customize its appearance and behavior.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={barloaderRef} />
    </DocsLayout>
  );
};

export default BarLoader;
