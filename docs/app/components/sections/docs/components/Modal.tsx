"use client";

import DocsLayout from "@/components/layout/DocsLayout";
import ModalExample from "@/components/preview/modal/Example";
import FormModal from "@/components/preview/modal/FormModal";
import { modalCodes } from "@/data/code/modal";

import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import React from "react";
import { Divider, SpaceTop } from "@/styles/global";
import HeaderText from "@/components/custom/docs/HeaderText";
import ComponentsBadge from "@/components/custom/ComponentsBadge";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import {
  modalContentRef,
  modalFooterRef,
  modalPanelRef,
  modalRef,
  modalTitleRef,
} from "@/data/reference/modal";
import Link from "next/link";

const Modal = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Modal</LargeTextHeader>
        <BodyText>
          The Modal component is used to display content in a dialog overlay. It
          can be used for notifications, forms, or any content that requires
          user interaction in a focused manner.
        </BodyText>
      </TextContent_Wrap>
      <Divider style={{ marginBottom: 16 }} />
      <ModalExample code={modalCodes.ex} />
      <TextContent_Wrap id="form-modal">
        <HeaderText id="form-modal">Form Modal</HeaderText>
        <BodyText>
          Form modal allow users to fill out form fields within a modal.
        </BodyText>
      </TextContent_Wrap>
      <FormModal code={modalCodes.form} />
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference: Modal</HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>Modal</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={modalRef} />
      <TextContent_Wrap id="api-reference:panel">
        <HeaderText id="api-reference:panel">
          API Reference: ModalPanel
        </HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>ModalPanel</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={modalPanelRef} />
      <TextContent_Wrap id="api-reference:title">
        <HeaderText id="api-reference:title">
          API Reference: ModalTitle
        </HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>ModalTitle</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={modalTitleRef} />
      <TextContent_Wrap id="api-reference:content">
        <HeaderText id="api-reference:content">
          API Reference: ModalContent
        </HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>ModalContent</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={modalContentRef} />
      <SpaceTop marginTop="xl" />
      <TextContent_Wrap>
        <SpaceTop marginTop="xl" />
        <BodyText>
          The <ComponentsBadge>ModalContent</ComponentsBadge> component is built
          on top of the <ComponentsBadge>Box</ComponentsBadge> component, so all
          the available props for the <ComponentsBadge>Box</ComponentsBadge>{" "}
          component are also available to the{" "}
          <ComponentsBadge>ModalContent</ComponentsBadge> component.
        </BodyText>
        <BodyText>
          See the <Link href="/docs/components/layout/box">Box</Link> component
          for more information.
        </BodyText>
      </TextContent_Wrap>
      <TextContent_Wrap id="api-reference:footer">
        <HeaderText id="api-reference:footer">
          API Reference: ModalFooter
        </HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>ModalFooter</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={modalFooterRef} />
    </DocsLayout>
  );
};

export default Modal;
