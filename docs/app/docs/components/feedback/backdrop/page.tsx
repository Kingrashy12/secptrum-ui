import { BackdropDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Backdrop - Secptrum UI',
};

const Backdrop = () => {
  return (
    <>
      <BackdropDocs />
    </>
  );
};

export default Backdrop;
