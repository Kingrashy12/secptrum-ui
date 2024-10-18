'use client';

import NastedList from '@/components/custom/docs/NastedList';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import DocsLayout from '@/components/layout/DocsLayout';
import { switchCode } from '@/data/code/switch';
import { switchRef } from '@/data/reference/switch';
import BasicSwitch from '@/components/example/input/BasicSwitch';
import DisabledSwitch from '@/components/example/input/DisabledSwitch';
import SwitchColors from '@/components/example/input/SwitchColors';
import SwitchSizes from '@/components/example/input/SwitchSizes';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import { Divider } from '@/styles/global';
import React from 'react';
import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';

const SwitchPage = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Switch</LargeTextHeader>
        <BodyText>
          The Switch component is a UI element that allows users to toggle
          between two states, commonly used for enabling or disabling
          functionality. It can be customized with different colors and sizes
        </BodyText>
      </TextContent_Wrap>
      <Divider style={{ marginBottom: 16 }} />
      <BasicSwitch />
      <TextContent_Wrap id="sizes">
        <HeaderText id="sizes">Sizes</HeaderText>
        <BodyText>
          The Switch component comes in two size variants{' '}
          <ComponentsBadge>md</ComponentsBadge> and{' '}
          <ComponentsBadge>lg</ComponentsBadge>.
        </BodyText>
      </TextContent_Wrap>
      <SwitchSizes code={switchCode.sizes} />
      <TextContent_Wrap id="color">
        <HeaderText id="color">Color</HeaderText>
      </TextContent_Wrap>
      <div style={{ marginTop: 20 }} />
      <SwitchColors code={switchCode.colors} />
      <TextContent_Wrap id="disabled">
        <HeaderText id="disabled">Disabled</HeaderText>
      </TextContent_Wrap>
      <DisabledSwitch code={switchCode.disabled} />
      <TextContent_Wrap id="customizing-the-switch">
        <HeaderText id="customizing-the-switch">
          Customizing the Switch
        </HeaderText>
        <NastedList>
          <li>
            <b>Size</b>: You can change the size of the switch to{' '}
            <ComponentsBadge>md</ComponentsBadge> or{' '}
            <ComponentsBadge>lg</ComponentsBadge> to fit different UI layouts.
          </li>
          <li>
            <b>Colors</b>: Use the <ComponentsBadge>color</ComponentsBadge> and{' '}
            <ComponentsBadge>checkedColor</ComponentsBadge> props to set custom
            colors for the switch&apos;s on and off states.
          </li>
          <li>
            <b>Disabled State</b>: The switch can be disabled to prevent
            interaction when a particular action is not available.
          </li>
        </NastedList>
      </TextContent_Wrap>
      <TextContent_Wrap id="api-refrence">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          Below is a table detailing the available props for the{' '}
          <ComponentsBadge>Switch</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={switchRef} />
    </DocsLayout>
  );
};

export default SwitchPage;
