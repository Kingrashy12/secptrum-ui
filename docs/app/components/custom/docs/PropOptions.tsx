'use client';

import React from 'react';
import { Box } from 'secptrum-ui';
import Typography from '../Typography';
import { styled } from 'styled-chroma';
import { BodyText } from '@/styles/docs/start.styled';
import { fonts } from '@/styles/global';

type SizeVariantTyp = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

type PropOptionType = {
  children: React.ReactNode;
  hideHeader?: boolean;
  italic?: boolean;
  hasBodyText?: boolean;
  bodyText?: string;
  header?: string;
  spacing?: SizeVariantTyp;
};
const PropOptions = ({
  children,
  hideHeader,
  italic,
  hasBodyText,
  bodyText,
  header,
  spacing,
}: PropOptionType) => {
  const labelId = header ? header?.toLowerCase().replace(/\s/g, '-') : 'props';
  return (
    <Wrapper id={labelId} spacing={spacing} direction="column">
      {hideHeader ? null : (
        <Lable as="h4" id={labelId}>
          {header ? header : 'Props'}
        </Lable>
      )}
      <PropsList italic={italic}>{children}</PropsList>
      {hasBodyText && <BodyText>{bodyText}</BodyText>}
    </Wrapper>
  );
};

export default PropOptions;

const Wrapper = styled(Box)`
  flex-direction: column;
  gap: 8px;
`;

const Lable = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors?.text};
  font-family: 'General Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  letter-spacing: 0.1px;
  line-height: 1.5;
`;
const PropsList = styled<{ italic: PropOptionType['italic'] }>('ul')`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  li {
    font-family: ${fonts.nunito};
    color: ${({ theme }) => theme.colors?.text};
    font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  }
`;
