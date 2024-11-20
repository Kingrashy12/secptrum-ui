import React, { Suspense } from 'react';
import PageLoader from '../components/loaders/PageLoader/PageLoader';
import { DynamicImportProps } from '../types/sui';

export const DynamicImport: React.FC<DynamicImportProps> = ({
  importFunc,
  loaderOptions,
}) => {
  const LazyComponent = React.lazy(importFunc);

  return (
    <Suspense fallback={<PageLoader {...loaderOptions} />}>
      <LazyComponent />
    </Suspense>
  );
};
