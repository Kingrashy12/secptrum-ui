"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "../hooks";
import { Box, Button, styled } from "secptrum-ui";
import Typography from "./custom/Typography";
import { sidebarLinks } from "../data/sidebar";

const PageNavigator = () => {
  const { pathname } = useRouter();
  const [currentPage, setCurrentPage] = useState<any>(null);
  const [nextPage, setNextPage] = useState<any>(null);
  const [prevPage, setPrevPage] = useState<any>(null);

  useEffect(() => {
    function getPage() {
      let found = false;

      for (let i = 0; i < sidebarLinks.length; i++) {
        // Filter out unavailable links upfront
        const availableLinks = sidebarLinks[i].links.filter(
          (link: any) => !link.not_available
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
    console.log("currentPage:", currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Navigator align="horizontal">
      {/* Previous Page Link */}
      {prevPage ? (
        <Link href={prevPage.uri}>
          <Button
            leftIcon={IoIosArrowBack}
            size="lg"
            radius="full"
            variant="ghost"
          >
            <Typography font="inter">{prevPage.label}</Typography>
          </Button>
        </Link>
      ) : (
        <div />
      )}

      {/* Next Page Link */}
      {nextPage ? (
        <Link href={nextPage.uri}>
          <Button
            rightIcon={IoIosArrowForward}
            size="lg"
            radius="full"
            variant="ghost"
          >
            <Typography font="inter">{nextPage.label}</Typography>
          </Button>
        </Link>
      ) : (
        <div />
      )}
    </Navigator>
  );
};

export default PageNavigator;

const Navigator = styled(Box)`
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
  align-items: center;

  a {
    text-decoration: none;
  }
`;
