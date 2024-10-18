'use client';

import { TextContent_Wrap } from '@/styles/docs/start.styled';
import DocsLayout from '@/components/layout/DocsLayout';
import { BodyText } from '@/styles/docs/start.styled';
import { LargeTextHeader } from '@/styles/docs/start.styled';
import React from 'react';
import { Divider, SpaceTop } from '@/styles/global';
import HeaderText from '@/components/custom/docs/HeaderText';
import ScaleLoadExample from '@/components/example/feedback/ScaleLoader';
import ComponentsBadge from '@/components/custom/ComponentsBadge';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import { scaleLoaderRef } from '@/data/reference/loaders';

const ScaleLoader = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">ScaleLoader</LargeTextHeader>
        <BodyText>
          The ScaleLoader component provides a customizable scale loading
          indicator, perfect for displaying progress or loading states in a
          sleek, animated scale format.
        </BodyText>
      </TextContent_Wrap>
      <Divider />
      <SpaceTop marginTop="2xl" />
      <TextContent_Wrap>
        <ScaleLoadExample />
      </TextContent_Wrap>
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{' '}
          <ComponentsBadge>ScaleLoader</ComponentsBadge> component, which allows
          you to customize its appearance and behavior.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={scaleLoaderRef} />
    </DocsLayout>
  );
};

export default ScaleLoader;
