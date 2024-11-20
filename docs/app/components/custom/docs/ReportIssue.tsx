'use client';

import { fonts } from '@/styles/global';
import React from 'react';
import { Button, styled } from 'secptrum-ui';

const Container = styled('div')`
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Description = styled('p')`
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
  font-family: ${fonts.jakarta};
  font-weight: 500;
  line-height: 1.5;
`;

const ReportIssue: React.FC = () => {
  const handleReportClick = () => {
    window.open(
      'https://github.com/Kingrashy12/secptrum-ui/issues/new',
      '_blank'
    );
  };

  return (
    <Container>
      <Description>
        If you encounter any bugs or issues while using Spectrum UI, please
        report them by creating a new issue. Your feedback is invaluable and
        helps improve the library.
      </Description>
      <Button variant="light" onClick={handleReportClick}>
        Report an Issue
      </Button>
    </Container>
  );
};

export default ReportIssue;
