'use client';

import React from 'react';
import Media from '../custom/Media';
import { GithubImg, SecptrumLogo } from '@/assets';
import { Box, colors, Icon } from 'secptrum-ui';
import Typography from '../custom/Typography';
import Link from 'next/link';
import { styled, useTheme } from 'styled-chroma';
import { RiMenuUnfold3Line } from 'react-icons/ri';
// import { GoBell } from 'react-icons/go';
import { MdSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { sidebarlinks } from '@/data/sidebar';
import { LuMenu } from 'react-icons/lu';
import { useMenu } from '@/context/useMenu';
import { useSideBar } from '@/context/useSideBar';
import { fonts } from '@/styles/global';

const Navbar = () => {
  const { mode, theme, toggleTheme } = useTheme();
  const { onOpen } = useMenu();
  const { onOpen: openSideBar } = useSideBar();
  const light = mode === 'light';

  return (
    <Nav light={light}>
      <Box className="logo">
        <Icon
          icon={RiMenuUnfold3Line}
          onClick={openSideBar}
          size={25}
          color={theme.colors?.icon}
        />
        <Link href="/">
          <Logo src={SecptrumLogo.src} width={50} height={50} />
          <Secptrum>Secptrum UI</Secptrum>
        </Link>
      </Box>
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
          {/* <GoBell size={20} color={theme.colors?.icon} className="not" /> */}
          <Icon
            icon={light ? IoMdMoon : MdSunny}
            size={22}
            className="not"
            color={theme.colors?.icon}
            onClick={toggleTheme}
          />
        </Links>
      </LinkWrapper>
      <MenuIcon>
        <Icon
          icon={light ? IoMdMoon : MdSunny}
          size={22}
          className="not"
          color={theme.colors?.icon}
          onClick={toggleTheme}
        />
        {/* <GoBell size={20} color={theme.colors?.icon} className="not" /> */}
        <Icon
          icon={LuMenu}
          onClick={onOpen}
          color={theme.colors?.icon}
          size={25}
        />
      </MenuIcon>
    </Nav>
  );
};

export default Navbar;

const Secptrum = styled('p')`
  color: ${(props) => props.theme.colors?.text};
  font-family: ${fonts.nunito};
  font-weight: 600;
  font-size: 18px;
  transform: translateY(2px);
`;

const Nav = styled<{ light: boolean }>('div')`
  background: ${(props) =>
    props.light ? 'rgb(255,255,255,0.5)' : 'rgb(0,0,0,0.5)'};
  display: flex;
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 4px 6px;
  z-index: 100;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(6px);
  border-bottom: 1px solid
    ${(props) => (props.light ? colors.gray[300] : 'rgb(38 38 38)')};

  .logo {
    flex-grow: 0.5;
    align-items: center;

    svg {
      display: none;

      @media screen and (max-width: 820px) {
        display: flex;
      }
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 0;
    }
  }

  @media screen and (max-width: 1024px) {
  }
`;

const Logo = styled(Media)`
  width: 50px;
  height: 50px;
`;

const LinkWrapper = styled(Box)`
  justify-content: space-between;
  width: 30%;
  @media screen and (max-width: 1024px) {
    width: 40%;
  }
  @media screen and (max-width: 820px) {
    gap: 1.5rem;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    gap: 1rem;
    width: 55%;
  }
  @media screen and (max-width: 550px) {
    display: none !important;
  }
`;

const Links = styled(Box)`
  gap: 3.5rem;
  align-items: center;

  .not {
    cursor: pointer;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;

    &:hover {
      opacity: 0.75;
    }
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

  p {
    font-family: 'Poppins-Medium';
    font-size: 14px;
  }
`;

const Git = styled(Media)`
  width: 28px;
  height: 28px;
  &:hover {
    opacity: 0.85;
  }
`;

const Divider = styled('div')`
  background: ${(props) => props.theme.colors?.divider};
  width: 1px;
  height: auto;
`;

const MenuIcon = styled('div')`
  display: none;

  @media screen and (max-width: 550px) {
    display: flex;
    align-items: center;
    gap: 2rem;
    /* width: 50%; */
  }
`;
