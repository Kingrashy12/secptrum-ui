"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Collapsible from "./Collapsible";
import { sidebarLinks } from "../../data/sidebar";
import Typography from "./Typography";
import Link from "next/link";
import {
  DivProps,
  HeadProps,
  styled,
  useTheme,
  Box,
  colors,
  css,
} from "secptrum-ui";
import { useRouter } from "../../hooks";
import { fonts } from "../../styles/global";

const StickyBar = () => {
  const { pathname } = useRouter();

  const { mode } = useTheme();

  const light = mode === "light";
  if (typeof window === "undefined") return null;

  return (
    <StyledBar light={light}>
      <BarContent>
        <BarStack>
          <>
            {sidebarLinks.map((link, index) => (
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
                    <DocsContent key={index} notavailable={doc.not_available}>
                      <DocsCategory hidden={!doc.category}>
                        {doc.category}
                      </DocsCategory>
                      <Link href={doc.uri}>
                        <DocLinkWrap
                          isactive={pathname === doc.uri.toString()}
                          notavailable={doc.not_available}
                          light={light}
                        >
                          <DocsLabel notavailable={doc.not_available}>
                            {doc.label}
                          </DocsLabel>
                          <DocAlert notavailable={doc.not_available}>
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
  );
};

export default StickyBar;

const StyledBar = styled<{ light: boolean }>("div")`
  height: 100vh;
  background: ${(props) => props.theme?.colors?.background};
  width: 250px;
  flex-direction: column;
  border-right: 1px solid
    ${(props) => (props.light ? colors.gray[300] : colors.neutral[800])};
  position: sticky;
  flex-shrink: 0;
  top: 0;
  padding-right: 3px;
  display: flex;

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
    pointer-events: ${(props) => props.notavailable && "none"};
  }
`;

export const DocsCategory = styled(Typography)`
  color: blue;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 6px 26px;
`;

interface DocsLabelProps extends HeadProps {
  notavailable: boolean | any;
}

export const DocsLabel = styled<DocsLabelProps>("p")`
  font-size: 14px;
  opacity: ${(props) => (props.notavailable ? 0.4 : 1)};
  font-family: ${fonts.poppins};
`;

export const DocAlert = styled<DocsLabelProps>("p")`
  color: blue;
  background: rgb(191 219 254);
  padding: 4px;
  font-size: 12px;
  border-radius: 5px;
  display: ${(props) => (props.notavailable ? "flex" : "none")};
  opacity: 0.4;
  font-family: ${fonts.poppins};
`;

interface IStyleDocWrap extends DivProps {
  isactive: boolean;
  notavailable: boolean | undefined;
  light: boolean | undefined;
}

export const DocLinkWrap = styled<IStyleDocWrap>(Box)`
  align-items: center;
  gap: 5px;
  padding: 6px 26px;
  cursor: ${(props) => (props.notavailable ? "default" : "pointer")};
  color: ${(props) =>
    props.isactive ? colors.blue[600] : props.theme.colors?.text};
  ${(props) =>
    props.isactive
      ? css`
          border-left: 1.8px solid ${colors.blue[600]};
        `
      : ""};
  transform: translateX(-1px);

  &:hover {
    color: ${colors.blue[600]};
    border-left: 1.8px solid ${colors.blue[600]};
  }
`;

export const ExtraLinks = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 10px 16px;
  color: ${(props) => props.theme.colors?.text};
  flex-direction: column;
  height: 100%;

  p {
    font-size: 15px;
    line-height: 1.5rem;
    font-weight: 600;
  }
`;
