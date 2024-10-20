import React from 'react';
import { Container } from '../../start/InstallPage';
import DocBar from '@/components/sections/components/DocBar';
import Drawer from '@/components/sections/docs/components/Drawer';

// Avoid importing Drawer from secptrum-ui

const DrawerDocs = () => {
  return (
    <Container>
      <Drawer />
      <DocBar />
    </Container>
  );
};

export default DrawerDocs;
