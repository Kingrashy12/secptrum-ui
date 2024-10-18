import { CircularProgressDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'CircularProgress - Secptrum UI',
};

const CircularProgress = () => {
  return (
    <>
      <CircularProgressDocs />
    </>
  );
};

export default CircularProgress;
