import { FabPage } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Fab - Secptrum UI',
};

const FAB = () => {
  return (
    <>
      <FabPage />
    </>
  );
};

export default FAB;
