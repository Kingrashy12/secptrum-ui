import { CircleLoaderDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'CircleLoader - Secptrum UI',
};

const CircleLoader = () => {
  return (
    <>
      <CircleLoaderDocs />
    </>
  );
};

export default CircleLoader;
