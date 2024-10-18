'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import DocInfo from '@/components/custom/docs/DocInfo';
import HeaderText from '@/components/custom/docs/HeaderText';
import PropOptions from '@/components/custom/docs/PropOptions';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import DocsLayout from '@/components/layout/DocsLayout';
import DisabledTextInput from '@/components/preview/input/Disabled';
import TextInputWithError from '@/components/preview/input/Error';
import InputHero from '@/components/preview/input/Example';
import TextInput_Password from '@/components/preview/input/Password';
import TextInputRadius from '@/components/preview/input/Radius';
import TextInput_Variants from '@/components/preview/input/Variants';
import { inputCodes } from '@/data/code/input';
import { inputRef } from '@/data/reference/input';
import { PropBadge } from '@/styles/custom';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import { Divider } from '@/styles/global';
import React from 'react';

const Input = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">TextInput</LargeTextHeader>
        <BodyText>
          The <ComponentsBadge>TextInput</ComponentsBadge> component is a
          versatile and customizable text input field designed to handle various
          user input scenarios. It supports different states, such as disabled,
          error handling, and more, ensuring flexibility for form elements.
        </BodyText>
      </TextContent_Wrap>
      <Divider style={{ marginBottom: 16 }} />
      <InputHero />
      <TextContent_Wrap id="variants">
        <HeaderText id="variants">Variants</HeaderText>
        <BodyText>
          The TextInput component is available in three variants:
        </BodyText>
        <PropOptions hideHeader>
          <li>
            <strong>Solid</strong>
          </li>
          <li>
            <strong>Outline</strong>
          </li>
          <li>
            <strong>Ghost</strong>
          </li>
        </PropOptions>
      </TextContent_Wrap>
      <TextInput_Variants code={inputCodes.variant} />
      <TextContent_Wrap id="radius">
        <HeaderText id="radius">Radius</HeaderText>
        <BodyText>
          The TextInput component has five <PropBadge>radius</PropBadge>{' '}
          options:
        </BodyText>
        <PropOptions hideHeader>
          <li>
            <strong>Small (sm)</strong>
          </li>
          <li>
            <strong>Medium (md)</strong>
          </li>
          <li>
            <strong>Large (lg)</strong>
          </li>
          <li>
            <strong>Extra Large (xl)</strong>
          </li>
          <li>
            <strong>Full (full)</strong>
          </li>
        </PropOptions>
      </TextContent_Wrap>
      <TextInputRadius code={inputCodes.radius} />
      <TextContent_Wrap id="example">
        <HeaderText id="example">Examples</HeaderText>
        <BodyText>
          Below are basic examples of how to use the{' '}
          <ComponentsBadge>TextInput</ComponentsBadge> components.
        </BodyText>
      </TextContent_Wrap>
      <PropOptions hideHeader>
        <li>With Type &quot;password&quot; </li>
      </PropOptions>
      <div style={{ marginTop: 16 }} />
      <TextInput_Password code={inputCodes.pass} />
      <div style={{ marginTop: 16 }} />
      <PropOptions hideHeader>
        <li>With error </li>
      </PropOptions>
      <div style={{ marginTop: 16 }} />
      <TextInputWithError code={inputCodes.error} />
      <div style={{ marginTop: 16 }} />
      <PropOptions hideHeader>
        <li>With disabled state </li>
      </PropOptions>
      <div style={{ marginTop: 16 }} />
      <DisabledTextInput code={inputCodes.disabled} />
      <div style={{ marginTop: 20 }} />
      <DocInfo type="info">
        <BodyText>
          <b>Note:</b> While using the <ComponentsBadge>icon</ComponentsBadge>{' '}
          prop avoid wrapping the icon in a fragment ({'<>...</>'} or{' '}
          {'<FaUser/>'}) as this may cause the component to break.
        </BodyText>
      </DocInfo>
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          This component builds upon the HTML{' '}
          <ComponentsBadge>input</ComponentsBadge> element, supporting all its
          native props and attributes, and adds custom functionality and styling
          capabilities.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={inputRef} />
    </DocsLayout>
  );
};

export default Input;
