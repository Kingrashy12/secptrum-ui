'use client';

import React from 'react';
import { Box } from 'secptrum-ui';
import Install from '@/components/sections/docs/start/Install';
import DocBar from '@/components/sections/components/DocBar';

import { styled } from 'styled-chroma';

const InstallPage = () => {
  return (
    <Container>
      <Install />
      <DocBar />
    </Container>
  );
};

export default InstallPage;

export const Container = styled(Box)`
  gap: 8px;
  width: 100%;
  min-height: 100vh !important;
  height: 100% !important;
`;
