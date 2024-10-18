'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, colors } from 'secptrum-ui';
import Collapsible from './Collapsible';
import { sidebarlinks } from '@/data/sidebar';
import Typography from './Typography';
import Link from 'next/link';
import { DivProps, HeadProps, styled, useTheme } from 'styled-chroma';
import { useRouter } from '@/hooks';

const StickyBar = () => {
  const { pathname } = useRouter();

  const { mode } = useTheme();

  const light = mode === 'light';

  return (
    <StickyBarWrap>
      <StyledBar light={light}>
        <BarContent>
          <BarStack>
            <>
              {sidebarlinks.map((link, index) => (
                <Collapsible
                  header={link.header}
                  key={index}
                  isActive={
                    link.links.some((l) => pathname === l.uri) ||
                    link.links.some((l) =>
                      pathname.includes(l.label.toLowerCase())
                    )
                  }
                >
                  <>
                    {link.links.map((doc, index) => (
                      <DocsContent
                        key={index}
                        notavailable={doc?.not_available}
                      >
                        <DocsCategory hidden={!doc.category}>
                          {doc?.category}
                        </DocsCategory>
                        <Link href={doc.uri}>
                          <DocLinkWrap
                            isactive={pathname === doc.uri.toString()}
                            notavailable={doc?.not_available}
                            light={light}
                          >
                            <DocsLabel notavailable={doc?.not_available}>
                              {doc.label}
                            </DocsLabel>
                            <DocAlert notavailable={doc?.not_available}>
                              Soon
                            </DocAlert>
                          </DocLinkWrap>
                        </Link>
                      </DocsContent>
                    ))}
                  </>
                </Collapsible>
              ))}
            </>
          </BarStack>
        </BarContent>
      </StyledBar>
    </StickyBarWrap>
  );
};

export default StickyBar;

const StickyBarWrap = styled(Box)`
  width: 350px;
  position: relative;
  height: 100vh;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const StyledBar = styled<DivProps & { light: boolean }>('div')`
  height: 100vh;
  background: ${(props) => props.theme?.colors?.background};
  width: 280px;
  flex-direction: column;
  border-right: 1px solid
    ${(props) => (props.light ? colors.gray[300] : colors.neutral[800])};
  position: fixed;
  top: 0;
  flex-shrink: 0;
  padding-right: 3px;
  display: flex;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const BarContent = styled(Box)`
  flex-direction: column;
  margin-top: 4.5rem;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

const BarStack = styled(Box)`
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  display: flex;
  height: 100%;
`;

interface DocsContentProps extends DivProps {
  notavailable: boolean | any;
}

export const DocsContent = styled<DocsContentProps>(Box)`
  flex-direction: column;
  gap: 7px;

  a {
    text-decoration: none;
    pointer-events: ${(props) => props.notavailable && 'none'};
  }
`;

export const DocsCategory = styled(Typography)`
  color: blue;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-top: 5px;
`;

interface DocsLabelProps extends HeadProps {
  notavailable: boolean | any;
}

export const DocsLabel = styled<DocsLabelProps>(Typography)`
  color: ${(props) => props.theme.colors?.text};
  font-size: 14px;
  opacity: ${(props) => (props.notavailable ? 0.4 : 1)};
`;

export const DocAlert = styled<DocsLabelProps>(Typography)`
  color: blue;
  background: rgb(191 219 254);
  padding: 4px;
  font-size: 12px;
  border-radius: 5px;
  display: ${(props) => (props.notavailable ? 'flex' : 'none')};
  opacity: 0.4;
`;

export const DocLinkWrap = styled<
  DivProps & {
    isactive: boolean;
    notavailable: boolean | undefined;
    light: boolean | undefined;
  }
>(Box)`
  align-items: center;
  gap: 5px;
  background: ${(props) =>
    props.isactive
      ? props.light
        ? colors.blue[100]
        : 'rgb(30 41 59)'
      : 'transparent'};
  padding: 4px 8px;
  border-radius: 6px;
  cursor: ${(props) => (props.notavailable ? 'default' : 'pointer')};
`;

export const ExtraLinks = styled(Box)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 16px;
`;
