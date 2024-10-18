'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import AutoSelectPicker from '@/components/example/utility/AutoSelectPicker';
import BasicPicker from '@/components/example/utility/BasicPicker';
import MultiplePicker from '@/components/example/utility/MultiplePicker';
import DocsLayout from '@/components/layout/DocsLayout';
import { pickerCodes } from '@/data/code/picker';
import { pickerRef } from '@/data/reference/picker';
import { PropBadge } from '@/styles/custom';
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import { Divider } from '@/styles/global';
import React from 'react';

const ImagePickerPage = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">ImagePicker</LargeTextHeader>
        <BodyText>
          The <ComponentsBadge>ImagePicker</ComponentsBadge> component provides
          a flexible and customizable interface for selecting one or more
          images. It offers various configuration options such as single or
          multiple image selection, auto selection, and custom styling for the
          picker, image container, and remover elements.
        </BodyText>
      </TextContent_Wrap>
      <Divider />
      <TextContent_Wrap id="basic">
        <HeaderText id="basic">Basic Picker</HeaderText>
        <BodyText>
          The example below demonstrates the basic usage of the{' '}
          <ComponentsBadge>ImagePicker</ComponentsBadge> component. Users can
          select a single image, and once selected, it will be displayed in the
          picker area. The <PropBadge>onImageSelect</PropBadge> callback is
          triggered upon image selection.
        </BodyText>
      </TextContent_Wrap>
      <BasicPicker code={pickerCodes.basic} />
      <TextContent_Wrap id="multiple">
        <HeaderText id="multiple">Multiple Picker</HeaderText>
        <BodyText>
          The example below allows users to select multiple images. By enabling
          the <ComponentsBadge>multiple</ComponentsBadge> prop, users can pick
          several images at once. The{' '}
          <ComponentsBadge>onMultipleImageSelect</ComponentsBadge> callback will
          return an array of selected images.
        </BodyText>
      </TextContent_Wrap>
      <MultiplePicker code={pickerCodes.multiple} />
      <TextContent_Wrap id="autoselect">
        <HeaderText id="autoselect">AutoSelect Picker</HeaderText>
        <BodyText>
          The example below shows how the{' '}
          <ComponentsBadge>autoSelectImage</ComponentsBadge> prop works. When
          enabled, the <ComponentsBadge>ImagePicker</ComponentsBadge> will
          automatically select an available image when the picker is opened.
          Users can also manually choose another image.
        </BodyText>
      </TextContent_Wrap>
      <AutoSelectPicker code={pickerCodes.autoSelect} />
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          This section provides a comprehensive guide to the API of the Image
          Picker <ComponentsBadge>ImagePicker</ComponentsBadge> component,
          outlining all available props, their types, and default values. Use
          this reference to customize the behavior and appearance of the
          component to suit your application&apos;s needs.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={pickerRef} />
    </DocsLayout>
  );
};

export default ImagePickerPage;
