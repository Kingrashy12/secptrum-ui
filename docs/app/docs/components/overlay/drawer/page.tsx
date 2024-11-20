import { DrawerPage } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Drawer | Secptrum UI',
};

export default function Drawer() {
  return <DrawerPage />;
}
