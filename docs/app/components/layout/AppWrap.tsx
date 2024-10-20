"use client";

import React from "react";
import { ThemeProvider } from "styled-chroma";
import { GlobalStyles, RootWrap } from "../../styles/global";
import ScrollTop from "../ScrollTop";
import dynamic from "next/dynamic";
import { colors } from "secptrum-ui";
import { useRouter } from "@/hooks";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import DispatchState from "@/lib/DispatchState";
import ModeProvider from "./ModeProvider";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const StickyBar = dynamic(() => import("../custom/StickyBar"), { ssr: false });

const AppWrap = ({ children }: { children: React.ReactNode }) => {
  const theme = {
    light: {
      colors: {
        background: "#ffffff",
        text: "black",
        icon: "black",
        body: "rgb(55,65,81)",
        divider: colors.neutral[200],
        code: "yellow",
        code_opt_line: "#2d2c2c",
        prop: colors.gray[200],
      },
    },
    dark: {
      colors: {
        background: "#121212",
        text: "white",
        icon: "white",
        body: colors.neutral[500],
        divider: "#2d2c2c",
        code: "white",
        code_opt_line: "#2d2c2c",
        prop: colors.neutral[800],
      },
    },
  };

  const { pathname } = useRouter();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <ModeProvider>
          <RootWrap>
            {pathname === "/" ? null : <StickyBar />}
            <DispatchState pathname={pathname}>{children}</DispatchState>
          </RootWrap>
        </ModeProvider>

        <ScrollTop />
      </ThemeProvider>
    </Provider>
  );
};

export default AppWrap;
