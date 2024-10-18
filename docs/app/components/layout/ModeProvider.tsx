'use client';

import React from 'react';
import { ModeProvider as SpectrumModeProvider } from 'secptrum-ui';
import { useTheme } from 'styled-chroma';

const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useTheme();
  return <SpectrumModeProvider mode={mode}>{children}</SpectrumModeProvider>;
};

export default ModeProvider;
