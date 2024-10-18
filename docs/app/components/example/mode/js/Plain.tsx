import CodeBlock from '@/components/custom/code/CodeBlock';
import React from 'react';

const code = `
//ModeProvider.jsx
import React from 'react';
import { ModeProvider as SpectrumModeProvider } from 'secptrum-ui';
import { useTheme } from 'styled-chroma';

const ModeProvider = ({ children }) => {
  const { mode } = useTheme();
  return <SpectrumModeProvider mode={mode}>{children}</SpectrumModeProvider>;
};

export default ModeProvider;
`;
const PlainReactJsx = () => {
  return <CodeBlock code={code} language="jsx" />;
};

export default PlainReactJsx;
