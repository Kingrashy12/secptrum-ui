import { ButtonPage } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Button - Secptrum UI',
};

const Button = () => {
  return (
    <>
      <ButtonPage />
    </>
  );
};

export default Button;
