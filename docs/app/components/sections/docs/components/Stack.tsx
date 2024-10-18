'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import DocsLayout from '@/components/layout/DocsLayout';
import AlignStack from '@/components/preview/stack/Align';
import BasicStack from '@/components/preview/stack/Basic';
import { stackCodes } from '@/data/code/stack';
import { stackRef } from '@/data/reference/stack';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import { Divider } from '@/styles/global';
import React from 'react';

const Stack_Page = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Stack</LargeTextHeader>
        <BodyText>
          The <ComponentsBadge>Stack</ComponentsBadge> component is a layout
          utility designed to arrange elements in a row or column with
          customizable spacing. It builds on the flexibility of{' '}
          <ComponentsBadge>Box</ComponentsBadge> and provides additional layout
          control, making it easy to stack elements either horizontally or
          vertically.
        </BodyText>
      </TextContent_Wrap>
      <Divider />
      <TextContent_Wrap id="basic">
        <HeaderText id="basic">Basic</HeaderText>
        <BodyText>
          The Stack component acts as a generic container, wrapping around the
          elements to be arranged. Below is an example of a basic{' '}
          <ComponentsBadge>Stack</ComponentsBadge>
        </BodyText>
      </TextContent_Wrap>

      <BasicStack code={stackCodes.basic} />
      <TextContent_Wrap id="align">
        <HeaderText id="align">Align</HeaderText>
        <BodyText>
          This example shows how to align contents horizontally (side-by-side).
        </BodyText>
      </TextContent_Wrap>
      <AlignStack code={stackCodes.align} />
      <TextContent_Wrap id="api-refrence">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          Below is a table detailing the available props for the{' '}
          <ComponentsBadge>Stack</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={stackRef} />
    </DocsLayout>
  );
};

export default Stack_Page;
