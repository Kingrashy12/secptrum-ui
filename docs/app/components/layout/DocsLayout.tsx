'use client';

import { InstallPageContainer } from '@/styles/docs/start.styled';
import React from 'react';
import PageNavigator from '../PageNavigator';
import ReportIssue from '../custom/docs/ReportIssue';
import { Divider } from '@/styles/global';

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InstallPageContainer>
      <>{children}</>
      <Divider style={{ marginTop: 25 }} />
      <PageNavigator />
      <ReportIssue />
    </InstallPageContainer>
  );
};

export default DocsLayout;
