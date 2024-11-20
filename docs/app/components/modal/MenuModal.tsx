import { useMenu } from "@/context/useMenu";
import React from "react";
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
import { Logo } from "@/assets";
import Link from "next/link";
import { sidebarLinks } from "@/data/sidebar";
import Image from "next/image";
import { LinkItem, Secptrum } from "@/styles/home.styled";
import { LuX } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

const MenuModal = () => {
  const { isOpen, onClose } = useMenu();
  const { mode, toggleTheme, theme } = useTheme();

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerHeader>
        <Link href="/">
          <Box centered spacing="md">
            <Image src={Logo.src} alt="logo" width={30} height={30} />
            <Secptrum>Secptrum UI</Secptrum>
          </Box>
        </Link>
        <HoverableIcon icon={LuX} size={20} onClick={onClose} />
      </DrawerHeader>
      <DrawerContent>
        <Box direction="column" spacing="lg">
          <Link href="/docs/getting-started/installation" onClick={onClose}>
            <LinkItem>Docs</LinkItem>
          </Link>
          <Link href={sidebarLinks[2].links[0].uri} onClick={onClose}>
            <LinkItem>Components</LinkItem>
          </Link>
          <LinkItem
            onClick={() => toast.info("Coming soon", { transition: "slideIn" })}
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
            iconSize={22}
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
  );
};

export default MenuModal;
