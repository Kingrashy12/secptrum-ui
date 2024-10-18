'use client';

import { BodyText } from '@/styles/docs/start.styled';
import { LargeTextHeader } from '@/styles/docs/start.styled';
import { TextContent_Wrap } from '@/styles/docs/start.styled';
import DocsLayout from '@/components/layout/DocsLayout';
import React from 'react';
import { Divider, SpaceTop } from '@/styles/global';
import CircularProgressExample from '@/components/example/feedback/CircularProgressExample';
import HeaderText from '@/components/custom/docs/HeaderText';
import ComponentsBadge from '@/components/custom/ComponentsBadge';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import { circularProgressRef } from '@/data/reference/loaders';

const CircularProgress = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">CircularProgress</LargeTextHeader>
        <BodyText>
          The CircularProgress component provides a customizable circular
          loading indicator, perfect for displaying progress or loading states
          in a sleek, animated circle format.
        </BodyText>
      </TextContent_Wrap>
      <Divider />
      <SpaceTop marginTop="2xl" />
      <TextContent_Wrap>
        <CircularProgressExample />
      </TextContent_Wrap>
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{' '}
          <ComponentsBadge>CircularProgress</ComponentsBadge> component, which
          allows you to customize its appearance and behavior.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={circularProgressRef} />
    </DocsLayout>
  );
};

export default CircularProgress;
