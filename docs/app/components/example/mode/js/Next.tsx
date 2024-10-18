import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';

const code = `
//layout/ModeProvider.jsx
'use client';

import React from 'react';
import { ModeProvider as SpectrumModeProvider } from 'secptrum-ui';
import { useTheme } from 'styled-chroma';

const ModeProvider = ({ children }) => {
  const { mode } = useTheme();
  return <SpectrumModeProvider mode={mode}>{children}</SpectrumModeProvider>;
};

export default ModeProvider;
`;

const NextJsx = () => {
  return <CodeBlock code={code} language="jsx" />;
};

export default NextJsx;
