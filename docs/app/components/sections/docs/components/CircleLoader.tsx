'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import DocsLayout from '@/components/layout/DocsLayout';
import CircleLoaderExample from '@/components/preview/CircleLoader';
import { loadersCode } from '@/data/code/loader';
import { circleloaderRef } from '@/data/reference/loaders';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import { Divider } from '@/styles/global';
import React from 'react';

const CircleLoader = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">CircleLoader</LargeTextHeader>
        <BodyText>
          The <ComponentsBadge>CircleLoader</ComponentsBadge> component provides
          a simple, customizable loading spinner. It&apos;s designed to visually
          indicate loading states, with options to adjust its size, color, and
          background.
        </BodyText>
      </TextContent_Wrap>
      <Divider />
      <TextContent_Wrap id="usage">
        <HeaderText id="usage">Usage</HeaderText>
        <BodyText>
          You can import and use the{' '}
          <ComponentsBadge>CircleLoader</ComponentsBadge> component as follows:
        </BodyText>
      </TextContent_Wrap>
      <CircleLoaderExample code={loadersCode.circelLoader} />
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{' '}
          <ComponentsBadge>CircleLoader</ComponentsBadge> component, which
          allows you to customize its appearance and behavior.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={circleloaderRef} />
    </DocsLayout>
  );
};

export default CircleLoader;
