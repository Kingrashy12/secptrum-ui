import React from 'react';
import TableOfContents from '@/components/layout/TableOfContents';
import ViteDocs from '../components/ViteDocs';

const VitePage = () => {
  return (
    <>
      <ViteDocs />
      <TableOfContents />
    </>
  );
};

export default VitePage;