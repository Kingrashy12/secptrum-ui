import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContentWrap,
} from '@/styles/docs/start.styled';
import Link from 'next/link';
import { useRouter } from '@/hooks';
import React from 'react';
import { FaLink } from 'react-icons/fa6';
import { useTheme } from 'styled-chroma';

type TextContentType = {
  largeHeader?: string;
  mediumHeader?: string;
  bodyText: string;
  id: string;
  isMedium?: boolean;
  style?: React.CSSProperties;
};

const TextContent = ({
  largeHeader,
  style,
  mediumHeader,
  bodyText,
  id,
  isMedium,
}: TextContentType) => {
  const { pathname } = useRouter();
  const { theme } = useTheme();

  return (
    <TextContentWrap id={id}>
      {largeHeader && (
        <LargeTextHeader font="nunito" as="h1">
          {largeHeader}
        </LargeTextHeader>
      )}
      {mediumHeader && (
        <Link href={`${pathname}/#${id}`} className="header-link">
          <FaLink color={theme.colors?.body} size={20} />
          <MediumTextHeader
            isMedium={isMedium?.valueOf().toString() === 'true'}
            font="inter"
            id={id}
            as={isMedium ? 'h4' : 'h2'}
          >
            {mediumHeader}
          </MediumTextHeader>
        </Link>
      )}
      <BodyText style={style}>{bodyText}</BodyText>
    </TextContentWrap>
  );
};

export default TextContent;
