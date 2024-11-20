'use client';

import React from 'react';
import { GlobalStyles, RootWrap } from '../../styles/global';
import ScrollTop from '../ScrollTop';
import { useRouter } from '@/hooks';
import ModeProvider from './ModeProvider';

import Nav from './Nav';

import StickyBar from '../custom/StickyBar';
import MenuProvider from '@/context/useMenu';
import { SideBarProvider } from '@/context';

const AppWrap = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  const notAllowed = ['/', 'showcase'];
  return (
    <>
      <ModeProvider>
        <MenuProvider>
          <SideBarProvider>
            <GlobalStyles />
            <Nav />
            <RootWrap>
              {notAllowed.every((path) => pathname !== path) && <StickyBar />}
              {children}
            </RootWrap>
            <ScrollTop />
          </SideBarProvider>
        </MenuProvider>
      </ModeProvider>
    </>
  );
};

export default AppWrap;
