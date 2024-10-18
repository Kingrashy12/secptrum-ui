import React from 'react';
import { Box } from 'secptrum-ui';
import Typography from '../Typography';
import { styled } from 'styled-chroma';
import { fonts } from '@/styles/global';

type DescBoxType = {
  header: string;
  footer?: string;
  li: ListContent['li'];
};

const DescriptionBox = ({ li, header, footer }: DescBoxType) => {
  return (
    <DescBox>
      <Header>{header}</Header>
      <UL>
        {li?.map((text, index) => (
          <ListItem key={index}>
            <b>{text.bold_text}:</b> {text.item_text}
          </ListItem>
        )) || null}
      </UL>
      <Header>{footer}</Header>
    </DescBox>
  );
};

export default DescriptionBox;

const DescBox = styled(Box)`
  flex-direction: column;
  margin-bottom: 10px;
  gap: 16px;
`;

const Header = styled(Typography)`
  color: ${(props) => props.theme.colors?.text};
  font-family: ${(props) => props.theme.fonts?.body};
`;

const UL = styled('ul')`
  display: flex;
  flex-direction: column;
  padding: 5px 9px;
  gap: 12px;
`;

const ListItem = styled('li')`
  color: ${(props) => props.theme.colors?.body};
  font-family: ${fonts.nunito};
  line-height: 1.3rem;

  b {
    color: ${(props) => props.theme.colors?.text};
    font-size: 14px;
  }
`;
