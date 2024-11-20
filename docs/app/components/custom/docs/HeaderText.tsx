import { useRouter } from '@/hooks';
import { MediumTextHeader, SmallTextHeader } from '@/styles/docs/docs.styled';
import Link from 'next/link';
import React from 'react';
import { FaLink } from 'react-icons/fa6';
import { styled, useTheme } from 'secptrum-ui';

type HeaderTextType = {
  id: string;
  children: string | React.ReactNode;
  style?: React.CSSProperties;
  as?: 'h2' | 'h3';
};

const HeaderText = ({ id, children, style, as }: HeaderTextType) => {
  const { pathname } = useRouter();
  const { theme } = useTheme();
  return (
    <HeaderLink href={`${pathname}/#${id}`} className="header-link">
      <FaLink color={theme.colors?.body} size={20} />
      {as === 'h3' ? (
        <SmallTextHeader id={id} style={style}>
          {children}
        </SmallTextHeader>
      ) : (
        <MediumTextHeader id={id} style={style}>
          {children}
        </MediumTextHeader>
      )}
    </HeaderLink>
  );
};

export default HeaderText;

const HeaderLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  display: flex;
  width: auto;
  gap: 8px;
  height: auto;

  svg {
    transform: translateY(1.15rem);
    position: absolute;
    left: -1.5rem;
    display: none;
  }

  &:hover svg {
    display: block;
  }
`;
