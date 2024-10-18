'use client';

import DocsLayout from '@/components/layout/DocsLayout';
import ModalExample from '@/components/preview/modal/Example';
import FormModal from '@/components/preview/modal/FormModal';
import { modalCodes } from '@/data/code/modal';

import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import React from 'react';
import ModalProps from '../../components/Modal';
import { Divider } from '@/styles/global';
import HeaderText from '@/components/custom/docs/HeaderText';

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
      <TextContent_Wrap id="modal-components">
        <HeaderText id="modal-components">Modal Components</HeaderText>
        <ModalProps />
        <ModalProps />
      </TextContent_Wrap>
    </DocsLayout>
  );
};

export default Modal;
