import type { Metadata } from 'next';
import { AppWrap } from './components';
import './globals.css';
import { MenuProvider, SideBarProvider } from './context';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Secptrum UI',
  description: 'A comprehensive React component library',
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
        <MenuProvider>
          <SideBarProvider>
            <AppWrap>{children}</AppWrap>
          </SideBarProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
