'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';
import NastedList from '@/components/custom/docs/NastedList';
import PropOptions from '@/components/custom/docs/PropOptions';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import DocsLayout from '@/components/layout/DocsLayout';
import CheckboxExample from '@/components/preview/checkbox/Example';
import RoundedCheck from '@/components/preview/checkbox/Rounded';
import { checkboxCode } from '@/data/code/checkbox';
import { checkboxRef } from '@/data/reference/checkbox';
import { PropBadge } from '@/styles/custom';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import { Divider } from '@/styles/global';
import React from 'react';

const CheckboxPage = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Checkbox</LargeTextHeader>
        <BodyText>
          Checkboxes allow the user to select one or more items from a set.
        </BodyText>
      </TextContent_Wrap>
      <Divider />
      <TextContent_Wrap id="example">
        <HeaderText id="example">Examples</HeaderText>
        <BodyText>
          Below are basic examples of how to use the{' '}
          <ComponentsBadge>Checkbox</ComponentsBadge> components.
        </BodyText>
      </TextContent_Wrap>
      <div style={{ marginTop: 16 }} />
      <PropOptions hideHeader>
        <li>Basic Usage</li>
      </PropOptions>
      <CheckboxExample code={checkboxCode.basic} />

      <div style={{ marginTop: 16 }} />
      <NastedList id="with-rounded">
        <PropOptions hideHeader>
          <li>
            With <PropBadge>rounded</PropBadge> prop
          </li>
        </PropOptions>
      </NastedList>
      <RoundedCheck code={checkboxCode.rounded} />
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          See the documentation below for a complete reference to all of the
          props available to the <ComponentsBadge>Checkbox</ComponentsBadge>{' '}
          components.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={checkboxRef} />
    </DocsLayout>
  );
};

export default CheckboxPage;
