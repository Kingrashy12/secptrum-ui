import { ModalDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Modal - Secptrum UI',
};

const Modal = () => {
  return (
    <>
      <ModalDocs />
    </>
  );
};

export default Modal;
