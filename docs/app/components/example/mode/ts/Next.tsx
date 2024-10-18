import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';

const code = `
//layout/ModeProvider.tsx
'use client';

import React from 'react';
import { ModeProvider as SpectrumModeProvider } from 'secptrum-ui';
import { useTheme } from 'styled-chroma';

const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useTheme();
  return <SpectrumModeProvider mode={mode}>{children}</SpectrumModeProvider>;
};

export default ModeProvider;
`;

const NextTsx = () => {
  return <CodeBlock code={code} language="tsx" />;
};

export default NextTsx;
