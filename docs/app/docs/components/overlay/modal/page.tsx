import { ModalPage } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Modal | Secptrum UI',
};

export default function Modal() {
  return <ModalPage />;
}
