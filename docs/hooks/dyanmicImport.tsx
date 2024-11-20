"use client";

import React, { Suspense } from "react";
import { BackgroundLoader } from "../components";

type DynamicImportProps = {
  importFunc: () => Promise<{ default: React.ComponentType }>;
};

export const DynamicImport: React.FC<DynamicImportProps> = ({ importFunc }) => {
  const LazyComponent = React.lazy(importFunc);

  return (
    <Suspense fallback={<BackgroundLoader />}>
      <LazyComponent />
    </Suspense>
  );
};
