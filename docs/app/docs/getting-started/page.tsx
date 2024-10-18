import { BackgroundLoader, OverViewPage } from '@/components';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Overview - Secptrum UI',
};

const Overview = () => {
  return (
    <Suspense fallback={<BackgroundLoader />}>
      <OverViewPage />
    </Suspense>
  );
};

export default Overview;
