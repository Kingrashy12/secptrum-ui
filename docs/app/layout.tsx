import type { Metadata } from "next";
import "./globals.css";
import { AppWrap } from "../components";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider, Toaster } from "secptrum-ui";
import SecptrumUIRegistry from "../lib/registry";
import { theme } from "../styles/theme";

export const metadata: Metadata = {
  title: "Secptrum UI",
  description: "A comprehensive React component library",
  twitter: {
    title: "Secptrum UI",
    description: "A comprehensive React component library",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SpeedInsights />
        <Analytics />
        <SecptrumUIRegistry>
          <ThemeProvider theme={theme}>
            <Toaster />
            <AppWrap>{children}</AppWrap>
          </ThemeProvider>
        </SecptrumUIRegistry>
      </body>
    </html>
  );
}
