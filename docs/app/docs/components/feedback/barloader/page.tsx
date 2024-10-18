import { BarLoaderDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'BarLoader - Secptrum UI',
};

const BarLoader = () => {
  return (
    <>
      <BarLoaderDocs />
    </>
  );
};

export default BarLoader;
