'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';
import PropOptions from '@/components/custom/docs/PropOptions';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import DocsLayout from '@/components/layout/DocsLayout';
import BasicFab from '@/components/preview/fab/Basic';
import FabSize from '@/components/preview/fab/Size';
import FabVariant from '@/components/preview/fab/Variant';
import { fabCodes } from '@/data/code/fab';
import { fabRef } from '@/data/reference/fab';
import { PropBadge } from '@/styles/custom';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import { Divider } from '@/styles/global';
import React from 'react';

const FAB = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Floating Action Button</LargeTextHeader>
        <BodyText>
          The Floating Action Button (Fab) represents the primary action on a
          page. It is a circular button that appears to{' '}
          <PropBadge>float</PropBadge> above the UI and encourages users to
          perform an important action. Use it to highlight a key action that is
          central to the app&apos;s purpose.
        </BodyText>
      </TextContent_Wrap>
      <Divider style={{ marginBottom: 15 }} />
      <BasicFab />
      <TextContent_Wrap id="size">
        <HeaderText id="size">Size</HeaderText>
        <BodyText>
          The <ComponentsBadge>Fab</ComponentsBadge> component comes in three
          sizes, By default, the size is <ComponentsBadge>md</ComponentsBadge>.
          Use the <ComponentsBadge>size</ComponentsBadge> prop to make the size
          fit your need
        </BodyText>
      </TextContent_Wrap>
      <FabSize code={fabCodes.size} />
      <TextContent_Wrap id="variant">
        <HeaderText id="variant">Variant</HeaderText>
        <BodyText>
          The <ComponentsBadge>Fab</ComponentsBadge> component comes in two
          variants, By default, the variant is{' '}
          <ComponentsBadge>solid</ComponentsBadge>. Use the{' '}
          <ComponentsBadge>variant</ComponentsBadge> prop to make it fit your
          need
        </BodyText>
      </TextContent_Wrap>
      <FabVariant code={fabCodes.variant} />
      <TextContent_Wrap id="color-scheme">
        <HeaderText id="color-scheme">ColorScheme</HeaderText>
        <BodyText>
          The <ComponentsBadge>Fab</ComponentsBadge> component supports three
          color schemes to convey different semantic meanings:
        </BodyText>
      </TextContent_Wrap>
      <PropOptions header="ColorScheme options">
        <li>
          colorScheme: <ComponentsBadge>primary</ComponentsBadge> |{' '}
          <ComponentsBadge>secondary</ComponentsBadge> |{' '}
          <ComponentsBadge>danger</ComponentsBadge> (default:{' '}
          <ComponentsBadge>primary</ComponentsBadge>)
        </li>
      </PropOptions>
      <TextContent_Wrap id="position">
        <HeaderText id="position">Position</HeaderText>
        <BodyText>
          The <ComponentsBadge>Fab</ComponentsBadge> component can be positioned
          in 6 different locations:
        </BodyText>
      </TextContent_Wrap>
      <PropOptions header="Position options">
        <li>
          position: <ComponentsBadge>top-left</ComponentsBadge> |{' '}
          <ComponentsBadge>top-center</ComponentsBadge> |{' '}
          <ComponentsBadge>top-right</ComponentsBadge> |{' '}
          <ComponentsBadge>bottom-left</ComponentsBadge> |{' '}
          <ComponentsBadge>bottom-center</ComponentsBadge> |{' '}
          <ComponentsBadge>bottom-right</ComponentsBadge>
          (default: <ComponentsBadge>bottom-right</ComponentsBadge>)
        </li>
      </PropOptions>
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          This section provides a comprehensive guide to the API of the Floating
          Action Button <ComponentsBadge>Fab</ComponentsBadge> component,
          outlining all available props, their types, and default values. Use
          this reference to customize the behavior and appearance of the
          component to suit your application&apos;s needs.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={fabRef} />
    </DocsLayout>
  );
};

export default FAB;
