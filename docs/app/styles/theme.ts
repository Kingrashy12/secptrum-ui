'use client';

import { colors } from 'secptrum-ui';

export const theme = {
  light: {
    colors: {
      background: '#ffffff',
      text: 'black',
      icon: 'black',
      body: 'rgb(55,65,81)',
      divider: colors.neutral[200],
      code: 'yellow',
      code_opt_line: '#2d2c2c',
      prop: colors.gray[200],
      nav_header: 'rgb(255,255,255,0.5)',
      hero_gradient: 'linear-gradient(30deg, #fff, #f0f0f0)',
      interactive_bg: colors.gray[100],
      prop_bg: colors.gray[100],
      prop_border: colors.neutral[300],
      ref_head: colors.neutral[100],
      ref_shadow: 'rgba(0, 0, 0, 0.1)',
    },
  },
  dark: {
    colors: {
      background: '#121212',
      text: 'white',
      icon: 'white',
      body: colors.neutral[500],
      divider: '#2d2c2c',
      code: 'white',
      code_opt_line: '#2d2c2c',
      prop: colors.neutral[800],
      nav_header: 'rgb(0,0,0,0.5)',
      hero_gradient: 'linear-gradient(30deg, #000, #2d2c2c)',
      interactive_bg: colors.neutral[800],
      prop_bg: colors.neutral[800],
      prop_border: colors.neutral[700],
      ref_head: colors.neutral[800],
      ref_shadow: colors.slate[950],
    },
  },
};
