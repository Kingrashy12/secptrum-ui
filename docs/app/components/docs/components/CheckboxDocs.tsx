'use client';

import ApiReference from '@/components/custom/docs/ApiReference';
import HeaderText from '@/components/custom/docs/HeaderText';
import BasicCheck from '@/components/example/inputs/checkbox/BasicCheck';
import Example from '@/components/example/inputs/checkbox/Example';
import RoundedCheck from '@/components/example/inputs/checkbox/RoundedCheck';
import DocsLayout from '@/components/layout/DocsLayout';
import { checkboxRef } from '@/data/reference/checkbox';
import showLoader from '@/hooks/showLoader';
import { DocText, LargeTextHeader } from '@/styles/docs/docs.styled';
import { Divider } from '@/styles/global';
import React from 'react';
import { Box } from 'secptrum-ui';

export const CheckboxDocs = () => {
  showLoader();
  return (
    <DocsLayout>
      <Box direction="column" spacing="md">
        <LargeTextHeader>Checkbox</LargeTextHeader>
        <DocText>Used for selecting options from a set.</DocText>
        <Divider style={{ margin: '10px' }} />
      </Box>
      <Example />
      <Box direction="column" spacing="md">
        <HeaderText id="examples">Examples</HeaderText>
      </Box>
      <Box direction="column" spacing="md">
        <HeaderText id="basic-usage" as="h3">
          Basic Usage
        </HeaderText>
        <BasicCheck />
      </Box>
      <Box direction="column" spacing="md">
        <HeaderText id="rounded-usage" as="h3">
          Rounded Checkbox
        </HeaderText>
        <RoundedCheck />
      </Box>
      <Box direction="column" spacing="md" id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <ApiReference reference={checkboxRef} />
      </Box>
    </DocsLayout>
  );
};
