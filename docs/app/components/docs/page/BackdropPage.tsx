import TableOfContents from '@/components/layout/TableOfContents';
import React from 'react';
import BackdropDocs from '../components/BackdropDocs';

const BackdropPage = () => {
  return (
    <>
      <BackdropDocs />
      <TableOfContents />
    </>
  );
};

export default BackdropPage;