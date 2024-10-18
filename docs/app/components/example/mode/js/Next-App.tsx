import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';

const code = `
//In Next.js 13+ with the App Router, you can structure your application as follows:
//app/components/layout/AppWrap.jsx

'use client'

import ModeProvider from '@/components/layout/ModeProvider';
import { ThemeProvider } from 'styled-chroma';

const AppWrap = ({ children}) => {
const theme = {
  light: {
    colors: {
      background: '#f0f0f0',
      text: '#000',
    },
  },
  dark: {
    colors: {
      background: '#121212',
      text: '#fff',
    },
  },
};

  return (
    <ThemeProvider theme={theme}>
      <ModeProvider>
        {children}
      </ModeProvider>
    </ThemeProvider>
  );
};

export default AppWrap;

//Import the AppWrap into your root layout
//app/layout.jsx
import AppWrap from '@/components/layout/AppWrap';

export default function RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <AppWrap>
          {children}
        </AppWrap>
      </body>
    </html>
  );
};
;
`;

const NextAppJsx = () => {
  return <CodeBlock code={code} language="jsx" />;
};

export default NextAppJsx;
