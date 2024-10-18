import { Typography } from '@/components';
import { Box } from 'secptrum-ui';
import { colors, styled } from 'styled-chroma';

export const customTheme = {
  hljs: {
    background: '#000', // Black background
    color: '#f8f8f2', // Main text color
  },
  'hljs-keyword': {
    color: '#ff79c6', // Keywords
  },
  'hljs-string': {
    color: '#50fa7b', // Strings
  },
  'hljs-variable': {
    color: '#8be9fd', // Variables
  },
  'hljs-comment': {
    color: '#6272a4', // Comments
  },
};

export const ReferenceTable = styled(Box)`
  flex-direction: column;
`;

export const PropBadge = styled(Typography)`
  padding: 2px 4px; /* Adjust padding for a badge-like appearance */
  border-radius: 5px; /* Rounded for a typical badge style */
  font-family: 'SUSE', sans-serif;
  background-color: ${colors.gray[200]};
  color: ${colors.neutral[800]};
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;
