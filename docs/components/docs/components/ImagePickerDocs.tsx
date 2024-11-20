import ComponentsBadge from "../../custom/ComponentsBadge";
import ApiReference from "../../custom/docs/ApiReference";
import DocsBox from "../../custom/docs/Box";
import HeaderText from "../../custom/docs/HeaderText";
import AutoSelectPicker from "../../example/utilities/image-picker/AutoSelectPicker";
import BasicPicker from "../../example/utilities/image-picker/BasicPicker";
import MultiplePicker from "../../example/utilities/image-picker/MultiplePicker";
import DocsLayout from "../../layout/DocsLayout";
import { pickerRef } from "../../../data/reference/picker";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider, SpaceTop } from "../../../styles/global";
import React from "react";

const ImagePickerDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader as="h1">ImagePicker</LargeTextHeader>
        <DocText onHeader>
          The <ComponentsBadge>ImagePicker</ComponentsBadge> component provides
          a flexible and customizable interface for selecting one or more
          images. It offers various configuration options such as single or
          multiple image selection, auto selection, and custom styling for the
          picker, image container, and remover elements.
        </DocText>
      </DocsBox>
      <Divider style={{ marginTop: 10 }} />
      <SpaceTop marginTop="lg" />
      <DocsBox id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </DocsBox>
      <DocsBox id="basic">
        <HeaderText id="basic" as="h3">
          Basic Picker
        </HeaderText>
        <DocText>
          The example below demonstrates the basic usage of the{" "}
          <ComponentsBadge>ImagePicker</ComponentsBadge> component. Users can
          select a single image, and once selected, it will be displayed in the
          picker area. The <ComponentsBadge>onImageSelect</ComponentsBadge>{" "}
          callback is triggered upon image selection.
        </DocText>
        <BasicPicker />
      </DocsBox>
      <DocsBox id="multiple">
        <HeaderText id="multiple" as="h3">
          Multiple Picker
        </HeaderText>
        <DocText>
          The example below allows users to select multiple images. By enabling
          the <ComponentsBadge>multiple</ComponentsBadge> prop, users can pick
          several images at once. The{" "}
          <ComponentsBadge>onMultipleImageSelect</ComponentsBadge> callback will
          return an array of selected images.
        </DocText>
        <MultiplePicker />
      </DocsBox>
      <DocsBox id="autoselect">
        <HeaderText id="autoselect" as="h3">
          AutoSelect Picker
        </HeaderText>
        <DocText>
          The example below shows how the{" "}
          <ComponentsBadge>autoSelectImage</ComponentsBadge> prop works. When
          enabled, the <ComponentsBadge>ImagePicker</ComponentsBadge> will
          automatically select an available image when the picker is opened.
          Users can also manually choose another image.
        </DocText>
        <AutoSelectPicker />
      </DocsBox>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          This section provides a comprehensive guide to the API of the Image
          Picker <ComponentsBadge>ImagePicker</ComponentsBadge> component,
          outlining all available props, their types, and default values. Use
          this reference to customize the behavior and appearance of the
          component to suit your application&apos;s needs.
        </DocText>
      </DocsBox>
      <ApiReference reference={pickerRef} />
    </DocsLayout>
  );
};

export default ImagePickerDocs;
