import React from 'react';
import { Container } from '../../start/InstallPage';
import ScaleLoader from '@/components/sections/docs/components/ScaleLoader';
import DocBar from '@/components/sections/components/DocBar';

// I'm so sorry 😭, But
// Avoid importing ScaleLoader from secptrum-ui

const ScaleLoaderDocs = () => {
  return (
    <Container>
      <ScaleLoader />
      <DocBar />
    </Container>
  );
};

export default ScaleLoaderDocs;
