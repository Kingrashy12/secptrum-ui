import { BottomNavDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Bottom Navigation - Secptrum UI',
};

const BottomNav = () => {
  return (
    <>
      <BottomNavDocs />
    </>
  );
};

export default BottomNav;
