import React from 'react';
import { Container } from '../../start/InstallPage';
import DocBar from '@/components/sections/components/DocBar';
import CircularProgress from '@/components/sections/docs/components/CircularProgress';

// I'm so sorry 😭, But
// Avoid importing CircularProgress from secptrum-ui

const CircularProgressDocs = () => {
  return (
    <Container>
      <CircularProgress />
      <DocBar />
    </Container>
  );
};

export default CircularProgressDocs;
