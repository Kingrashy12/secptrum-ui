import TableOfContents from '@/components/layout/TableOfContents';
import React from 'react';
import { QuickStart } from '../components/QuickStart';
import showLoader from '@/hooks/showLoader';

const QuickStartPage = () => {
  showLoader();
  return (
    <>
      <QuickStart />
      <TableOfContents />
    </>
  );
};

export default QuickStartPage;
