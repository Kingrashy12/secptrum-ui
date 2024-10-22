import { ShowCasePage } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Showcase Lab - Secptrum UI',
  description: 'A page showcasing applications that utilize Secptrum UI.',
};

const ShowCase = () => {
  return <ShowCasePage />;
};

export default ShowCase;
