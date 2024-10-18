import { fonts } from '@/styles/global';
import React from 'react';
import { Button } from 'secptrum-ui';
import { styled } from 'styled-chroma';

// Styled container for the ReportIssue
const Container = styled('div')`
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

// Styled paragraph for the description
const Description = styled('p')`
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
  font-family: ${fonts.nunito};
  line-height: 1.5;
`;

const ReportIssue: React.FC = () => {
  const handleReportClick = () => {
    // Replace this URL with your actual issue tracker URL
    window.open(
      'https://github.com/SecptrumLab/secptrum-ui/issues/new',
      '_blank'
    );
  };
  //   on our GitHub repository
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
