'use client';

import { fonts } from '@/styles/global';
import React from 'react';
import { Box } from 'secptrum-ui';
import { styled } from 'styled-chroma';

type NastedListType = {
  children: React.ReactNode;
  id?: string;
};

const NastedList = ({ children, id }: NastedListType) => {
  return <Container id={id}>{children}</Container>;
};

export default NastedList;

const Container = styled(Box)`
  flex-direction: column;
  gap: 12px;

  p {
    font-family: 'Poppins-Medium', sans-serif;
    font-family: ${fonts.nunito};
    font-weight: 500;
  }
  .bodyHeader {
    color: ${(props) => props.theme.colors?.text};
  }
`;

export const ListBody = styled('p')`
  font-family: ${fonts.nunito};
  color: ${({ theme }) => theme.colors?.body};
  font-weight: 500;
`;
