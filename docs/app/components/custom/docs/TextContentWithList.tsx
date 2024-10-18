import { MediumTextHeader, TextContentWrap } from '@/styles/docs/start.styled';
import Link from 'next/link';
import { useRouter } from '@/hooks';
import React from 'react';
import { styled, useTheme } from 'styled-chroma';
import { FaLink } from 'react-icons/fa6';
import { fonts } from '@/styles/global';

type TextContentType = {
  header: string;
  li: ListContent['li'];
  id: string;
  isMedium?: boolean;
};

const TextContentWithList = ({ id, header, li, isMedium }: TextContentType) => {
  const { pathname } = useRouter();
  const { theme } = useTheme();

  return (
    <TextContentWrap id={id}>
      <Link href={`${pathname}/#${id}`} className="header-link">
        <FaLink color={theme.colors?.body} size={20} />
        <MediumTextHeader
          isMedium={isMedium}
          as={isMedium ? 'h4' : 'h2'}
          id={id}
        >
          {header}
        </MediumTextHeader>
      </Link>
      <UL>
        {li?.map((text, index) => (
          <ListItem key={index}>
            <b>{text.bold_text}:</b> {text.item_text}
          </ListItem>
        )) || null}
      </UL>
    </TextContentWrap>
  );
};

export default TextContentWithList;

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
  }
`;
