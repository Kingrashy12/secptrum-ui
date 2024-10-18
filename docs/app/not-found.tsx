import React from 'react';
import { NotFoundPage } from './components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found - Secptrum UI',
  description: '404',
};

const NotFound = () => {
  return (
    <main>
      <NotFoundPage />
    </main>
  );
};

export default NotFound;
