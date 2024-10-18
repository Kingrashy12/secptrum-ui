import { PulseLoaderDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'PulseLoader - Secptrum UI',
};

const PulseLoader = () => {
  return (
    <>
      <PulseLoaderDocs />
    </>
  );
};

export default PulseLoader;
