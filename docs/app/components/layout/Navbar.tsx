import React from "react";
import {
  Box,
  colors,
  Icon,
  useTheme,
  styled,
  HoverableIcon,
  Button,
} from "secptrum-ui";
import Link from "next/link";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { useMenu } from "@/context/useMenu";
import { useSideBar } from "@/context/useSideBar";
import { Divider, Links } from "@/styles/home.styled";
import { FaGithub } from "react-icons/fa6";
import NavLink from "./NavLink";

const Navbar = ({ visible }: { visible: boolean }) => {
  const { mode, theme, toggleTheme } = useTheme();
  const { onOpen } = useMenu();
  const { onOpen: openSideBar } = useSideBar();
  const light = mode === "light";

  return (
    <Nav light={light} visible={visible}>
      <Box className="logo" spacing="lg">
        <Icon
          icon={RiMenuUnfold3Line}
          onClick={openSideBar}
          size={25}
          color={theme.colors?.icon}
        />
        <NavLink />
      </Box>
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
      <MenuIcon>
        <HoverableIcon
          icon={light ? IoMdMoon : MdSunny}
          size={22}
          mode={mode as "light" | "dark"}
          color={theme.colors?.icon}
          onClick={toggleTheme}
        />

        <Icon
          icon={LuMenu}
          onClick={onOpen}
          color={theme.colors?.icon}
          size={25}
        />
      </MenuIcon>
    </Nav>
  );
};

export default Navbar;

const Nav = styled<{ light: boolean; visible: boolean }>("div")`
  background: ${(props) =>
    props.light ? "rgb(255,255,255,0.5)" : "rgb(0,0,0,0.5)"};
  display: flex;
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 4px 6px;
  z-index: 500;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(6px);
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(-50px)"};
  transition: transform 0.3s ease;
  border-bottom: 1px solid
    ${(props) => (props.light ? colors.gray[300] : "rgb(38 38 38)")};

  .logo {
    flex-grow: 0.5;
    align-items: center;

    svg {
      display: none;

      @media screen and (max-width: 820px) {
        display: flex;
      }
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 0;
    }
  }

  @media screen and (max-width: 1024px) {
  }
`;

const MenuIcon = styled("div")`
  display: none;

  @media screen and (max-width: 550px) {
    display: flex;
    align-items: center;
    gap: 2rem;
    /* width: 50%; */
  }
`;
