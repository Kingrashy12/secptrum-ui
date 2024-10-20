'use client';

import { BodyText, LargeTextHeader } from '@/styles/docs/start.styled';
import DocsLayout from '@/components/layout/DocsLayout';
import { TextContent_Wrap } from '@/styles/docs/start.styled';
import React from 'react';
import { Divider, SpaceTop } from '@/styles/global';
import HeaderText from '@/components/custom/docs/HeaderText';
import ComponentsBadge from '@/components/custom/ComponentsBadge';
import BottomNavExample from '@/components/example/navigation/BottomNavExample';
import { bottomNavCode } from '@/data/code/bottomnav';
import PropOptions from '@/components/custom/docs/PropOptions';
import RoundedBottomNav from '@/components/example/navigation/RoundedBottomNav';
import WideBottomNav from '@/components/example/navigation/WideBottomNav';
import NormalInfo from '@/components/custom/docs/NormalInfo';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import { bottomnavRef, bottomnavTabRef } from '@/data/reference/bottomnav';
const BottomNavigation = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Bottom Navigation</LargeTextHeader>
        <BodyText>
          A customizable bottom navigation bar, perfect for displaying
          navigation options at the bottom of the screen.
        </BodyText>
      </TextContent_Wrap>
      <Divider />
      <SpaceTop marginTop="2xl" />
      <TextContent_Wrap>
        <BottomNavExample code={bottomNavCode.ex} />
      </TextContent_Wrap>
      <TextContent_Wrap>
        <HeaderText id="variants">Variants</HeaderText>
        <BodyText>
          The BottomNav component supports the following variants:
        </BodyText>
        <PropOptions header="Variant">
          <li>full</li>
          <li>wide</li>
          <li>rounded</li>
        </PropOptions>
      </TextContent_Wrap>
      <TextContent_Wrap>
        <HeaderText id="rounded">Rounded</HeaderText>
        <RoundedBottomNav code={bottomNavCode.rounded} />
      </TextContent_Wrap>
      <TextContent_Wrap>
        <HeaderText id="wide">Wide</HeaderText>
        <WideBottomNav code={bottomNavCode.wide} />
      </TextContent_Wrap>
      <SpaceTop marginTop="3xl" />
      <NormalInfo>
        <BodyText>
          The <ComponentsBadge>BottomNav</ComponentsBadge> Components is
          designed to be used as a bottom navigation bar only on mobile devices.
        </BodyText>
      </NormalInfo>
      <TextContent_Wrap id="api-reference-bottomnav">
        <HeaderText id="api-reference-bottomnav">
          API Reference: BottomNav
        </HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{' '}
          <ComponentsBadge>BottomNav</ComponentsBadge> component, which allows
          you to customize its appearance and behavior.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={bottomnavRef} />
      <TextContent_Wrap id="api-reference-bottomnavtab">
        <HeaderText id="api-reference-bottomnavtab">
          API Reference: BottomNavTab
        </HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{' '}
          <ComponentsBadge>BottomNavTab</ComponentsBadge> component, which
          allows you to customize its appearance and behavior.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={bottomnavTabRef} />
    </DocsLayout>
  );
};

export default BottomNavigation;
