import { sidebarLinks } from "../../data/sidebar";
import { LinkItem, Links, Secptrum } from "../../styles/home.styled";
import { Logo } from "../../assets";
import Link from "next/link";
import React from "react";
import { Box, toast } from "secptrum-ui";
import Image from "next/image";

const NavLink = () => {
  return (
    <Box centered spacing="xl">
      <Link href="/">
        <Box centered spacing="md">
          <Image src={Logo.src} alt="logo" width={30} height={30} />
          <Secptrum>Secptrum UI</Secptrum>
        </Box>
      </Link>
      <Links>
        <Link href="/docs/getting-started/introduction">
          <LinkItem>Docs</LinkItem>
        </Link>
        <Link href={sidebarLinks[2].links[0].uri}>
          <LinkItem>Components</LinkItem>
        </Link>
        <LinkItem
          onClick={() => toast.info("Coming soon", { transition: "slideIn" })}
        >
          Blog
        </LinkItem>
      </Links>
    </Box>
  );
};

export default NavLink;
