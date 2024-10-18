import { useMenu } from '@/context/useMenu';
import React from 'react';
import { Backdrop, Box, colors, Stack } from 'secptrum-ui';
import Media from '../custom/Media';
import { GithubImg } from '@/assets';
import Link from 'next/link';
import { sidebarlinks } from '@/data/sidebar';
import Typography from '../custom/Typography';
import { styled } from 'styled-chroma';

const MenuModal = () => {
  const { isOpen, onClose } = useMenu();

  return (
    <Backdrop open={isOpen} onClose={onClose}>
      <Container>
        <LinkWrapper>
          <Links>
            <Link href={sidebarlinks[1].links[0].uri}>
              <Typography>Components</Typography>
            </Link>
            <Link href="/docs/getting-started">
              <Typography>Docs</Typography>
            </Link>
          </Links>
          <Divider />
          <Links>
            <Link
              href="https://github.com/SecptrumLab/secptrum-ui"
              target="_blank"
            >
              <Git src={GithubImg.src} width={28} height={28} />
            </Link>
          </Links>
        </LinkWrapper>
      </Container>
    </Backdrop>
  );
};

export default MenuModal;

const Container = styled(Stack)`
  background: ${(props) => props.theme.colors?.background};
  height: auto;
`;

const LinkWrapper = styled(Box)`
  flex-direction: column;
  gap: 16px;
`;

const Links = styled(Box)`
  gap: 2.2rem;
  align-items: center;
  flex-direction: column;

  .not {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors?.text};
    display: flex;
    align-items: center;

    &:hover {
      color: ${colors.blue[500]};
    }
  }
  svg,
  img {
    &:hover {
      opacity: 0.85;
    }
  }
`;

const Git = styled(Media)`
  width: 28px;
  height: 28px;
`;

const Divider = styled('div')`
  background: ${(props) => props.theme.colors?.divider};
  width: 1px;
  height: auto;
`;
