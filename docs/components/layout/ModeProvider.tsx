import React from 'react';
import { ModeProvider as SpectrumModeProvider, useTheme } from 'secptrum-ui';

const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useTheme();
  return <SpectrumModeProvider mode={mode}>{children}</SpectrumModeProvider>;
};

export default ModeProvider;
