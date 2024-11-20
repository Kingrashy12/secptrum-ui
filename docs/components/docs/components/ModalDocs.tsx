"use client";

import { Box, colors } from "secptrum-ui";
import DocsLayout from "../../layout/DocsLayout";
import React from "react";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider, SpaceTop } from "../../../styles/global";
import ModalExample from "../../example/overlay/modal/Example";
import HeaderText from "../../custom/docs/HeaderText";
import FormModal from "../../example/overlay/modal/FormModal";
import ComponentsBadge from "../../custom/ComponentsBadge";
import {
  modalContentRef,
  modalFooterRef,
  modalPanelRef,
  modalRef,
  modalTitleRef,
} from "../../../data/reference/modal";
import ApiReference from "../../custom/docs/ApiReference";
import Link from "next/link";

const ModalDocs = () => {
  return (
    <DocsLayout>
      <Box direction="column" spacing="md" width="100%">
        <LargeTextHeader>Modal</LargeTextHeader>
        <DocText onHeader>
          A pop-up dialog for displaying content or actions in a focused overlay
          format.
        </DocText>
      </Box>
      <Divider style={{ margin: "12px" }} />
      <Box direction="column" spacing="md">
        <ModalExample />
      </Box>
      <Box direction="column" spacing="md" id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </Box>
      <Box direction="column" spacing="md" id="form-modal">
        <HeaderText id="form-modal" as="h3">
          Form Modal
        </HeaderText>
        <DocText>
          Form modal allow users to fill out form fields within a modal.
        </DocText>
        <FormModal />
      </Box>
      <Box id="api-reference" direction="column" spacing="md">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>Modal</ComponentsBadge> component.
        </DocText>
        <ApiReference reference={modalRef} />
      </Box>
      <Box id="api-reference:panel" direction="column" spacing="md">
        <HeaderText id="api-reference:panel">ModalPanel</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>ModalPanel</ComponentsBadge> component.
        </DocText>
        <ApiReference reference={modalPanelRef} />
      </Box>
      <Box id="api-reference:title" direction="column" spacing="md">
        <HeaderText id="api-reference:title">ModalTitle</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>ModalTitle</ComponentsBadge> component.
        </DocText>
        <ApiReference reference={modalTitleRef} />
      </Box>
      <Box id="api-reference:content" direction="column" spacing="md">
        <HeaderText id="api-reference:content">ModalContent</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>ModalContent</ComponentsBadge> component.
        </DocText>
        <ApiReference reference={modalContentRef} />
      </Box>
      <SpaceTop marginTop="xl" />
      <Box direction="column" spacing="md">
        <DocText>
          The <ComponentsBadge>ModalContent</ComponentsBadge> component is built
          on top of the <ComponentsBadge>Box</ComponentsBadge> component, so all
          the available props for the <ComponentsBadge>Box</ComponentsBadge>{" "}
          component are also available to the{" "}
          <ComponentsBadge>ModalContent</ComponentsBadge> component.
        </DocText>
        <DocText>
          See the{" "}
          <Link
            style={{ color: colors.blue[500] }}
            href="/docs/components/layout/box"
          >
            Box
          </Link>{" "}
          component for more information.
        </DocText>
      </Box>
      <Box id="api-reference:footer" direction="column" spacing="md">
        <HeaderText id="api-reference:footer">ModalFooter</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>ModalFooter</ComponentsBadge> component.
        </DocText>
      </Box>
      <ApiReference reference={modalFooterRef} />
    </DocsLayout>
  );
};

export default ModalDocs;
