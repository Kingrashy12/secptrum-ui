import React from 'react';
import { Container } from '../../start/InstallPage';
import DocBar from '@/components/sections/components/DocBar';
import BottomNavigation from '@/components/sections/docs/components/BottomNavigation';

const BottomNavDocs = () => {
  return (
    <Container>
      <BottomNavigation />
      <DocBar />
    </Container>
  );
};

export default BottomNavDocs;
