import React from 'react';
import { Container } from '../../start/InstallPage';
import DocBar from '@/components/sections/components/DocBar';
import BarLoader from '@/components/sections/docs/components/BarLoader';

// I'm so sorry 😭, But
// Avoid importing BarLoader from secptrum-ui

const BarLoaderDocs = () => {
  return (
    <Container>
      <BarLoader />
      <DocBar />
    </Container>
  );
};

export default BarLoaderDocs;
