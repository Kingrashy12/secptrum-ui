import { ToastDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Toast - Secptrum UI',
};

const Toast = () => {
  return (
    <>
      <ToastDocs />
    </>
  );
};

export default Toast;
