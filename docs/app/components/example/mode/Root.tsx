import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';

const code = `
import ModeProvider from '../layout/ModeProvider';
import { ThemeProvider } from 'styled-chroma';

export default function App = () => {
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
        //Your app
      </ModeProvider>
    </ThemeProvider>
  );
};
`;

const Root = () => {
  return <CodeBlock code={code} language="jsx" />;
};

export default Root;
