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
import { ShowcaseFormProvider } from "@/context";
import Nav from "./Nav";

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
        nav_header: "rgb(255,255,255,0.5)",
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
        nav_header: "rgb(0,0,0,0.5)",
      },
    },
  };

  const { pathname } = useRouter();
  const notAllowed = ["/", "showcase"];
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav />
        <ModeProvider>
          <ShowcaseFormProvider>
            <RootWrap>
              {notAllowed.every((path) => pathname !== path) && <StickyBar />}
              <DispatchState pathname={pathname}>{children}</DispatchState>
            </RootWrap>
          </ShowcaseFormProvider>
        </ModeProvider>

        <ScrollTop />
      </ThemeProvider>
    </Provider>
  );
};

export default AppWrap;
