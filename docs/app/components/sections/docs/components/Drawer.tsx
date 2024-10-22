'use client';

import { BodyText } from '@/styles/docs/start.styled';
import DocsLayout from '@/components/layout/DocsLayout';
import { LargeTextHeader } from '@/styles/docs/start.styled';
import { TextContent_Wrap } from '@/styles/docs/start.styled';
import React from 'react';
import HeaderText from '@/components/custom/docs/HeaderText';
import { Divider, SpaceTop } from '@/styles/global';
import ComponentsBadge from '@/components/custom/ComponentsBadge';
import DrawerExample from '@/components/example/navigation/DrawerExample';
import { drawerCode } from '@/data/code/drawer';
import DrawerVariant from '@/components/example/navigation/DrawerVariant';
import DrawerPosition from '@/components/example/navigation/DrawerPosition';
import { PropBadge } from '@/styles/custom';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import {
  drawerFooterRef,
  drawerHeaderRef,
  drawerRef,
} from '@/data/reference/drawer';
import Link from 'next/link';
const Drawer = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Drawer</LargeTextHeader>
        <BodyText>
          A side drawer component that can be used to display a list of options
          or actions.
        </BodyText>
      </TextContent_Wrap>
      <Divider />
      <SpaceTop marginTop="2xl" />
      <TextContent_Wrap>
        <DrawerExample code={drawerCode.basic} />
      </TextContent_Wrap>
      <TextContent_Wrap id="variants">
        <HeaderText id="variants">Variants</HeaderText>
        <BodyText>
          The <ComponentsBadge>Drawer</ComponentsBadge> component has the two
          variants:
        </BodyText>
      </TextContent_Wrap>
      <DrawerVariant code={drawerCode.variant} />
      <TextContent_Wrap id="position">
        <HeaderText id="position">Position</HeaderText>
        <BodyText>
          The <ComponentsBadge>Drawer</ComponentsBadge> component can be
          positioned to the <PropBadge>left</PropBadge> or{' '}
          <PropBadge>right</PropBadge> of the screen.
        </BodyText>
      </TextContent_Wrap>
      <DrawerPosition code={drawerCode.position} />
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference: Drawer</HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{' '}
          <ComponentsBadge>Drawer</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={drawerRef} />
      <TextContent_Wrap id="api-reference:header">
        <HeaderText id="api-reference:header">
          API Reference: DrawerHeader
        </HeaderText>
        <BodyText>
          DrawerHeader extends the <ComponentsBadge>Box</ComponentsBadge>{' '}
          component inheriting all its styling, layout properties, and props
          allowing for flexible customization.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={drawerHeaderRef} />
      <TextContent_Wrap id="api-reference:footer">
        <HeaderText id="api-reference:footer">
          API Reference: DrawerFooter
        </HeaderText>
        <BodyText>
          Below are reference to the props available for{' '}
          <ComponentsBadge>DrawerFooter</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={drawerFooterRef} />
      <TextContent_Wrap id="api-reference:drawer-content">
        <HeaderText id="api-reference:drawer-content">
          API Reference: DrawerContent
        </HeaderText>
        <BodyText>
          The <ComponentsBadge>DrawerContent</ComponentsBadge> component is
          built on top of the <ComponentsBadge>Box</ComponentsBadge> component,
          so all the available props for the{' '}
          <ComponentsBadge>Box</ComponentsBadge> component are also available to
          the <ComponentsBadge>DrawerContent</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <BodyText>
        See the <Link href="/docs/components/layout/box">Box</Link> component
        for more information.
      </BodyText>
    </DocsLayout>
  );
};

export default Drawer;
