import { Logo } from "@/assets";
import { sidebarLinks } from "@/data/sidebar";
import {
  Divider,
  LinkItem,
  Links,
  Secptrum,
  TopSection,
} from "@/styles/home.styled";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import { LuMenu, LuX } from "react-icons/lu";
import { MdSunny } from "react-icons/md";
import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  HoverableIcon,
  toast,
  useTheme,
} from "secptrum-ui";
import NavLink from "../layout/NavLink";

const Header = () => {
  const { mode, theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <TopSection>
      <NavLink />
      <Links>
        <Link
          href="https://github.com/Kingrashy12/secptrum-ui"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            radius="full"
            size="lg"
            leftIcon={FaGithub}
            iconSize={20}
            variant="ghost"
          >
            Star on GithHub
          </Button>
        </Link>
        <Divider type="short" height="20px" />
        <HoverableIcon
          icon={mode === "light" ? IoMdMoon : MdSunny}
          size={20}
          mode={mode as "light" | "dark"}
          color={theme.colors?.icon}
          onClick={toggleTheme}
        />
      </Links>
      <HoverableIcon
        className="menu"
        icon={LuMenu}
        size={20}
        onClick={() => setOpen(true)}
      />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DrawerHeader>
          <Link href="/">
            <Box centered spacing="md">
              <Image src={Logo.src} alt="logo" width={30} height={30} />
              <Secptrum>Secptrum UI</Secptrum>
            </Box>
          </Link>
          <HoverableIcon icon={LuX} size={20} onClick={() => setOpen(false)} />
        </DrawerHeader>
        <DrawerContent>
          <Box direction="column" spacing="lg">
            <Link href="/docs/getting-started/installation">
              <LinkItem>Docs</LinkItem>
            </Link>
            <Link href={sidebarLinks[1].links[0].uri}>
              <LinkItem>Components</LinkItem>
            </Link>
            <LinkItem
              onClick={() =>
                toast.info("Coming soon", { transition: "slideIn" })
              }
            >
              Blog
            </LinkItem>
          </Box>
        </DrawerContent>
        <DrawerFooter space={26}>
          <Link
            href="https://github.com/Kingrashy12/secptrum-ui"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              radius="lg"
              size="md"
              leftIcon={FaGithub}
              iconSize={20}
              variant="ghost"
            >
              Star on GithHub
            </Button>
          </Link>
          <HoverableIcon
            icon={mode === "light" ? IoMdMoon : MdSunny}
            size={20}
            mode={mode as "light" | "dark"}
            color={theme.colors?.icon}
            onClick={toggleTheme}
          />
        </DrawerFooter>
      </Drawer>
    </TopSection>
  );
};

export default Header;
