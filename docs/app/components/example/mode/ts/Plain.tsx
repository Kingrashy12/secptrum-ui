import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';

const code = `
//ModeProvider.tsx
import React from 'react';
import { ModeProvider as SpectrumModeProvider } from 'secptrum-ui';
import { useTheme } from 'styled-chroma';

const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useTheme();
  return <SpectrumModeProvider mode={mode}>{children}</SpectrumModeProvider>;
};

export default ModeProvider;
`;

const PlainTsx = () => {
  return <CodeBlock code={code} language="tsx" />;
};

export default PlainTsx;
