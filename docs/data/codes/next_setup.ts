export const next_setup = {
  app_setup: {
    tsx: `
// app/layout.tsx
import SecptrumUIRegistry from '@/lib/registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <SecptrumUIRegistry>{children}</SecptrumUIRegistry>
      </body>
    </html>
  );
}
        `,
    js: `
// app/layout.js
import SecptrumUIRegistry from '@/lib/registry';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SecptrumUIRegistry>{children}</SecptrumUIRegistry>
      </body>
    </html>
  );
}    
        `,
    mode_tsx: `
// app/components/ModeProvider.tsx
'use client';
    
import React from 'react';
import { ModeProvider as Provider, useTheme } from 'secptrum-ui';
    
const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useTheme();
  return <Provider mode={mode}>{children}</Provider>;
};

export default ModeProvider;
    `,
    mode_js: `
// app/components/ModeProvider.js
'use client';
    
import React from 'react';
import { ModeProvider as Provider, useTheme } from 'secptrum-ui';
    
const ModeProvider = ({ children }) => {
  const { mode } = useTheme();
  return <Provider mode={mode}>{children}</Provider>;
};

export default ModeProvider;
    `,
    use_mode_tsx: `
// app/layout.tsx
import ModeProvider from '@/components/ModeProvider';
import { ThemeProvider } from 'secptrum-ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
// Define your theme, it's better to define your theme in a separate file
const theme = {
 light: {
  colors: {
      background: '#fff',
    },
  },
  dark: {
    colors: {
      background: '#000',
    },
    },
  };

  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <ModeProvider>{children}</ModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
    `,
    use_mode_js: `
// app/layout.js
import ModeProvider from '@/components/ModeProvider';
import { ThemeProvider } from 'secptrum-ui';

export default function RootLayout({ children }) {
// Define your theme, it's better to define your theme in a separate file
const theme = {
 light: {
  colors: {
      background: '#fff',
    },
  },
  dark: {
    colors: {
      background: '#000',
    },
    },
  };

  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <ModeProvider>{children}</ModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}    
    `,
    single_mode_tsx: `
// app/layout.tsx
import { ModeProvider } from 'secptrum-ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ModeProvider mode="dark">{children}</ModeProvider>
      </body>
    </html>
  );
}
   `,
    single_mode_js: `
// app/layout.js
import { ModeProvider } from 'secptrum-ui';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ModeProvider mode="dark">{children}</ModeProvider>
      </body>
    </html>
  );
}
    `,
  },
  page_setup: {
    tsx: `
// src/layout.tsx or src/components/layout.tsx
import SecptrumUIRegistry from '@/lib/registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <SecptrumUIRegistry>{children}</SecptrumUIRegistry>
      </body>
    </html>
  );
}      
      `,
    js: `
// src/layout.js or src/components/layout.js
import SecptrumUIRegistry from '@/lib/registry';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SecptrumUIRegistry>{children}</SecptrumUIRegistry>
      </body>
    </html>
  );
}      
        `,
    mode_tsx: `
// src/components/ModeProvider.tsx
'use client';
    
import React from 'react';
import { ModeProvider as Provider, useTheme } from 'secptrum-ui';
    
const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useTheme();
  return <Provider mode={mode}>{children}</Provider>;
};

export default ModeProvider;
    `,
    mode_js: `
// src/components/ModeProvider.js
'use client';
    
import React from 'react';
import { ModeProvider as Provider, useTheme } from 'secptrum-ui';
    
const ModeProvider = ({ children }) => {
  const { mode } = useTheme();
  return <Provider mode={mode}>{children}</Provider>;
};

export default ModeProvider;
    `,
    use_mode_tsx: `
// src/pages/_app.tsx

import ModeProvider from '@/components/ModeProvider';
import { ThemeProvider } from 'secptrum-ui';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
// Define your theme, it's better to define your theme in a separate file
const theme = {
 light: {
  colors: {
      background: '#fff',
    },
  },
  dark: {
    colors: {
      background: '#000',
    },
    },
  };

  return (
      <ThemeProvider theme={theme}>
        <ModeProvider>
          <Component {...pageProps} />
        </ModeProvider>
      </ThemeProvider>
  );
}
    `,
    use_mode_js: `
// src/pages/_app.js

import ModeProvider from '@/components/ModeProvider';
import { ThemeProvider } from 'secptrum-ui';

export default function App({ Component, pageProps }) {
// Define your theme, it's better to define your theme in a separate file
const theme = {
 light: {
  colors: {
      background: '#fff',
    },
  },
  dark: {
    colors: {
      background: '#000',
    },
    },
  };

  return (
        <ThemeProvider theme={theme}>
          <ModeProvider>
            <Component {...pageProps} />
          </ModeProvider>
        </ThemeProvider>
  );
}    
    `,
    single_mode_tsx: `
// src/pages/_app.tsx

import { ModeProvider } from 'secptrum-ui';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {

  return (
      <ModeProvider mode="dark">
        <Component {...pageProps} />
      </ModeProvider>
  );
}
   `,
    single_mode_js: `
// src/pages/_app.js

import { ModeProvider } from 'secptrum-ui';

export default function App({ Component, pageProps }) {

  return (
      <ModeProvider mode="dark">
        <Component {...pageProps} />
      </ModeProvider>
  );
}
    `,
  },
};
