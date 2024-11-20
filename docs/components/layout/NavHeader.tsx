import { fonts } from "../../styles/global";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { styled } from "secptrum-ui";

const NavHeader = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    // Get the current scroll position
    const currentScrollY = window.scrollY;

    // Determine whether to show or hide the header
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setVisible(false);
    } else if (currentScrollY < lastScrollY && currentScrollY < 100) {
      // Scrolling up
      setVisible(true);
    }

    // Update last scroll position
    setLastScrollY(currentScrollY);
  }, [lastScrollY, setVisible]);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, handleScroll]);

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
          href="https://github.com/Kingrashy12/secptrum-ui"
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
    font-family: ${fonts.nunito};
    font-size: 85%;
    padding: 3px 0;
    text-align: center;
    font-weight: 600;
  }

  a {
    text-decoration: underline;
  }
`;
