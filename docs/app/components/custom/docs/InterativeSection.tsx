'use client';

import { fonts } from '@/styles/global';
import React from 'react';
import { Box, Stack, styled } from 'secptrum-ui';

type InterativeCard = {
  child: React.ReactNode;
  children: React.ReactNode;
};

const InterativeSection = ({ child, children }: InterativeCard) => {
  return (
    <InterativeBox width="100%" centered>
      <Stack>{child}</Stack>
      <InterativeCard direction="column" spacing="lg">
        {children}
      </InterativeCard>
    </InterativeBox>
  );
};

export default InterativeSection;

const InterativeBox = styled(Box)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    flex-direction: column !important;
  }
`;

const InterativeCard = styled(Box)`
  border-left: 1px solid ${(props) => props.theme.colors?.divider};
  width: 80%;
  padding: 6px 8px;
  min-height: 100%;
  /* max-height: 250px; */
  overflow-y: auto;

  @media screen and (max-width: 550px) {
    width: 100% !important;
    border-left: none !important;
  }
`;

export const ICard = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 10px;

  p {
    color: ${(props) => props.theme.colors?.body};
    font-family: ${fonts.inter};
    font-size: 13px;
  }

  .handle {
    border-bottom: 2px solid ${(props) => props.theme.colors?.divider};
  }
`;

export const IButton = styled(Box)`
  justify-content: space-between;
  width: 100%;
  padding: 4px 3px;
  cursor: pointer;
  align-items: center;

  padding: 8px;
  margin-bottom: 2px;
  border-radius: 7px;
  color: ${(props) => props.theme.colors?.text};

  &:hover {
    background: ${(props) => props.theme.colors?.interactive_bg};
  }
`;
