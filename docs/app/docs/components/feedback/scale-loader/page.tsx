import { ScaleLoaderDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'ScaleLoader - Secptrum UI',
};

const ScaleLoader = () => {
  return (
    <>
      <ScaleLoaderDocs />
    </>
  );
};

export default ScaleLoader;
