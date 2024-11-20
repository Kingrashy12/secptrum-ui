import Collapsible from '@/components/custom/Collapsible';
import {
  DocAlert,
  DocLinkWrap,
  DocsCategory,
  DocsContent,
  DocsLabel,
  ExtraLinks,
} from '@/components/custom/StickyBar';
import { useSideBar } from '@/context/useSideBar';
import { sidebarLinks } from '@/data/sidebar';
import { useRouter } from '@/hooks';
import Link from 'next/link';
import React from 'react';
import { Backdrop, Box, colors, styled, useTheme, DivProps } from 'secptrum-ui';

const SideBarModal = () => {
  const { isOpen, onClose } = useSideBar();
  const { mode } = useTheme();
  const { pathname } = useRouter();
  const light = mode === 'light';

  return (
    <Backdrop open={isOpen} onClose={onClose}>
      <SideBarContainer light={light}>
        <BarContent>
          {sidebarLinks.map((link, index) => (
            <Collapsible
              header={link.header}
              key={index}
              isActive={
                link.links.some((l) => pathname === l.uri) ||
                link.links.some((l) => pathname.includes(l.label.toLowerCase()))
              }
            >
              <>
                {link.links.map((doc, index) => (
                  <DocsContent key={index} notavailable={doc?.not_available}>
                    <DocsCategory hidden={!doc.category}>
                      {doc?.category}
                    </DocsCategory>
                    <Link href={doc.uri} onClick={onClose}>
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
          <ExtraLinks></ExtraLinks>
        </BarContent>
      </SideBarContainer>
    </Backdrop>
  );
};

export default SideBarModal;

const SideBarContainer = styled<DivProps & { light: boolean }>(Box)`
  && {
    position: fixed;
  }
  height: 100%;
  background: ${(props) => props.theme.colors?.background};
  width: 300px;
  padding: 10px;
  left: 0;
  flex-direction: column;
  gap: 12px;
  border-right: 1px solid
    ${(props) => (props.light ? colors.gray[300] : colors.neutral[800])};
`;

const BarContent = styled(Box)`
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }
`;
