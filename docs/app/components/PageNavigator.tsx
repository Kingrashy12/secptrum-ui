'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRouter } from '@/hooks';
import { Box, colors, Stack } from 'secptrum-ui';
import Typography from './custom/Typography';
import { sidebarlinks } from '@/data/sidebar';
import { DivProps, styled, useTheme } from 'styled-chroma';

const PageNavigator = () => {
  const { pathname } = useRouter();
  const [currentPage, setCurrentPage] = useState<any>(null);
  const [nextPage, setNextPage] = useState<any>(null);
  const [prevPage, setPrevPage] = useState<any>(null);
  const { mode } = useTheme();
  const light = mode === 'light';

  useEffect(() => {
    function getPage() {
      let found = false;

      for (let i = 0; i < sidebarlinks.length; i++) {
        // Filter out unavailable links upfront
        const availableLinks = sidebarlinks[i].links.filter(
          (link) => !link.not_available
        );

        for (let j = 0; j < availableLinks.length; j++) {
          const page = availableLinks[j];

          // Match current route with the page's uri
          if (pathname === page.uri) {
            setCurrentPage(page);

            // Set previous page if it's not the first one
            if (j > 0) {
              setPrevPage(availableLinks[j - 1]);
            } else {
              setPrevPage(null); // No previous page
            }

            // Set next page if it's not the last one
            if (j < availableLinks.length - 1) {
              setNextPage(availableLinks[j + 1]);
            } else {
              setNextPage(null); // No next page
            }

            found = true;
            break;
          }
        }

        if (found) break;
      }
    }

    // Call getPage on mount or when router changes
    getPage();
    console.log('currentPage:', currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Navigator align="horizontal">
      {/* Previous Page Link */}
      {prevPage ? (
        <Link href={prevPage.uri}>
          <Navigator_ light={light}>
            <IoIosArrowBack />
            <Typography font="inter">{prevPage.label}</Typography>
          </Navigator_>
        </Link>
      ) : (
        <div /> // Empty div to maintain layout if no previous page
      )}

      {/* Next Page Link */}
      {nextPage ? (
        <Link href={nextPage.uri}>
          <Navigator_ light={light}>
            <Typography font="inter">{nextPage.label}</Typography>
            <IoIosArrowForward />
          </Navigator_>
        </Link>
      ) : (
        <div /> // Empty div to maintain layout if no next page
      )}
    </Navigator>
  );
};

export default PageNavigator;

const Navigator = styled(Stack)`
  justify-content: space-between;
  margin-top: 2rem;

  a {
    text-decoration: none;
  }
`;

interface INavigator extends DivProps {
  light: boolean;
}

const Navigator_ = styled<INavigator>(Box)`
  width: auto;
  padding: 5px 8px;
  border-radius: 6px;
  align-items: center;
  color: blue;
  cursor: pointer;
  justify-content: center;
  display: flex;
  gap: 8px;

  p {
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    background: ${(props) =>
      props.light ? colors.blue[100] : colors.slate[800]};
  }
`;
