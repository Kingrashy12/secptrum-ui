'use client';

import React from 'react';
import { Container } from './InstallPage';
import DocBar from '@/components/sections/components/DocBar';
import Overview from '@/components/sections/docs/start/Overview';

const OverViewPage = () => {
  return (
    <Container>
      <Overview />
      <DocBar />
    </Container>
  );
};

export default OverViewPage;
