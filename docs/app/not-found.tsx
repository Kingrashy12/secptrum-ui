import React from 'react';
import { NotFoundPage } from './components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found - Secptrum UI',
  description: '404',
};

const NotFound = () => {
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
      }}
    >
      <NotFoundPage />
    </main>
  );
};

export default NotFound;
