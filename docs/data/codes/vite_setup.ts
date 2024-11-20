export const vite_setup = {
  setup_mode_provider: {
    mode_tsx: `
// src/components/ModeProvider.tsx

import React from 'react';
import { ModeProvider as Provider, useTheme } from 'secptrum-ui';
        
const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useTheme();
  return <Provider mode={mode}>{children}</Provider>;
};

export default ModeProvider;   
        `,
    mode_js: `
// src/components/ModeProvider.jsx

import React from 'react';
import { ModeProvider as Provider, useTheme } from 'secptrum-ui';
        
const ModeProvider = ({ children }) => {
  const { mode } = useTheme();
  return <Provider mode={mode}>{children}</Provider>;
};

export default ModeProvider;  
        `,
    usage: `
// src/App.tsx or src/App.jsx

import React from 'react';
import ModeProvider from './components/ModeProvider';

const App = () => {
const theme = {
 light:{
  colors:{
    text: '#000',
    background: '#fff',
  },
 },
 dark:{
  colors:{
    text: '#fff',
    background: '#000',
  },
 },
}
  return (
    <ThemeProvider theme={theme}>
      <ModeProvider>
        ...
      </ModeProvider>
    </ThemeProvider>
  );
};

export default App;
    `,
    single_mode: `
// src/App.tsx or src/App.jsx

import { ModeProvider } from 'secptrum-ui';

const App = () => {
  return <ModeProvider mode="dark">...</ModeProvider>;
};

export default App;
    `,
  },
};
