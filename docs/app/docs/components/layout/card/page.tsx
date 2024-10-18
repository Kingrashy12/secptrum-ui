import { CardDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Backdrop - Secptrum UI',
};

const Card = () => {
  return (
    <>
      <CardDocs />
    </>
  );
};

export default Card;
