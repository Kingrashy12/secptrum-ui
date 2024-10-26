import type { Metadata } from "next";
import { AppWrap } from "./components";
import "./globals.css";
import { MenuProvider, SideBarProvider } from "./context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "secptrum-ui";
import ChromaRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "Secptrum UI",
  description: "A comprehensive React component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <SpeedInsights />
        <Analytics />
        <ChromaRegistry>
          <MenuProvider>
            <SideBarProvider>
              <Toaster />
              <AppWrap>{children}</AppWrap>
            </SideBarProvider>
          </MenuProvider>
        </ChromaRegistry>
      </body>
    </html>
  );
}
