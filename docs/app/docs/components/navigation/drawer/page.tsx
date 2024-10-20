import { DrawerDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Drawer - Secptrum UI',
};

const Drawer = () => {
  return (
    <>
      <DrawerDocs />
    </>
  );
};

export default Drawer;
