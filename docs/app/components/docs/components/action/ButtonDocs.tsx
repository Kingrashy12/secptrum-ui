import React from 'react';
import { Container } from '../../start/InstallPage';
import Button from '@/components/sections/docs/components/Button';
import DocBar from '@/components/sections/components/DocBar';

// I'm so sorry 😭, But
// Avoid importing Button from secptrum-ui

const ButtonDocs = () => {
  return (
    <Container>
      <Button />
      <DocBar />
    </Container>
  );
};

export default ButtonDocs;
