import React from 'react';
import { Container } from '../../start/InstallPage';
import PulseLoader from '@/components/sections/docs/components/PulseLoader';
import DocBar from '@/components/sections/components/DocBar';

// I'm so sorry 😭, But
// Avoid importing PulseLoader from secptrum-ui

const PulseLoaderDocs = () => {
  return (
    <Container>
      <PulseLoader />
      <DocBar />
    </Container>
  );
};

export default PulseLoaderDocs;
