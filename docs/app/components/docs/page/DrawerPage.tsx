import TableOfContents from '@/components/layout/TableOfContents';
import React from 'react';
import DrawerDocs from '../components/DrawerDocs';

const DrawerPage = () => {
  return (
    <>
      <DrawerDocs />
      <TableOfContents />
    </>
  );
};

export default DrawerPage;