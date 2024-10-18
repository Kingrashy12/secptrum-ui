import { useRouter } from '@/hooks';
import { MediumTextHeader } from '@/styles/docs/start.styled';
import Link from 'next/link';
import React from 'react';
import { FaLink } from 'react-icons/fa6';
import { styled, useTheme } from 'styled-chroma';

type HeaderTextType = {
  id: string;
  children: string | React.ReactNode;
};

const HeaderText = ({ id, children }: HeaderTextType) => {
  const { pathname } = useRouter();
  const { theme } = useTheme();
  return (
    <HeaderLink href={`${pathname}/#${id}`} className="header-link">
      <FaLink color={theme.colors?.body} size={20} />
      <MediumTextHeader isMedium font="inter" id={id} as={'h4'}>
        {children}
      </MediumTextHeader>
    </HeaderLink>
  );
};

export default HeaderText;

const HeaderLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  display: flex;
  width: 100%;
  gap: 8px;

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
