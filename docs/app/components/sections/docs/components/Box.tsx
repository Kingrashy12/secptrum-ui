'use client';

import DocsLayout from '@/components/layout/DocsLayout';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import React from 'react';
import { BoxFeatures, BoxProps, BoxSizeVariant } from '../../components/Box';
import BoxExample from '@/components/preview/box/Example';
import { boxCode } from '@/data/code/box';
import BoxLay from '@/components/preview/box/LayoutFlex';
import { PropBadge } from '@/styles/custom';
import { Divider } from '@/styles/global';
import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';

const Box_Page = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Box</LargeTextHeader>
        <BodyText>
          The <ComponentsBadge>Box</ComponentsBadge> component is a flexible,
          extensible container built using Flexbox and designed to extend the
          HTML <ComponentsBadge>div</ComponentsBadge>
          element. It provides additional props for managing spacing, layout,
          and alignment, allowing for easy customization and responsive design.
        </BodyText>
      </TextContent_Wrap>
      <Divider style={{ marginBottom: 15 }} />
      <BoxFeatures />
      <div style={{ marginTop: 16 }} />
      <BoxProps />
      <div style={{ marginTop: 16 }} />
      <BoxSizeVariant />
      <TextContent_Wrap id="example">
        <HeaderText id="example">Example</HeaderText>
        <BodyText>
          Here is an example of how to use the{' '}
          <ComponentsBadge>Box</ComponentsBadge> component with various spacing
          and layout props:
        </BodyText>
      </TextContent_Wrap>
      <BoxExample code={boxCode.ex} />
      <TextContent_Wrap id="layout-flexibility">
        <HeaderText id="layout-flexibility">Layout Flexibility</HeaderText>
        <BodyText>
          In the example below, The{' '}
          <PropBadge>direction=&apos;row&apos;</PropBadge> sets a horizontal
          layout. with the <PropBadge>centered</PropBadge> allowing contents to
          be horizontally and vertically centered.
        </BodyText>
      </TextContent_Wrap>
      <BoxLay code={boxCode.lay} />
    </DocsLayout>
  );
};

export default Box_Page;
