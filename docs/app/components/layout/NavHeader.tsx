"use client";

import { fonts } from "@/styles/global";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { styled } from "styled-chroma";

const NavHeader = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    // Get the current scroll position
    const currentScrollY = window.scrollY;

    // Determine whether to show or hide the header
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }

    // Update last scroll position
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Header
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <p>
        If you like Secptrum UI, give it a{" "}
        <Link
          href="https://github.com/SecptrumLab/secptrum-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          star on GitHub!{" "}
        </Link>
        ⭐
      </p>
    </Header>
  );
};

export default NavHeader;

const Header = styled("header")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;
  background: ${(props) => props.theme?.colors.nav_header};
  backdrop-filter: blur(6px);
  border-bottom: 1px solid ${(props) => props.theme?.colors.divider};
  position: sticky;
  top: 0;
  z-index: 100;

  p {
    color: ${(props) => props.theme?.colors.text};
    font-family: ${fonts.poppins};
    font-size: 80%;
    padding: 5px 0;
    text-align: center;
  }

  a {
    text-decoration: underline;
  }
`;
