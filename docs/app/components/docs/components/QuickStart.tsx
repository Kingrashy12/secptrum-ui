'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';
import NormalInfo from '@/components/custom/docs/NormalInfo';
import Usage from '@/components/example/quick-start/Usage';
import UsingStyled from '@/components/example/quick-start/UsingStyled';
import UsingTailwind from '@/components/example/quick-start/UsingTailwind';
import DocsLayout from '@/components/layout/DocsLayout';
import showLoader from '@/hooks/showLoader';
import { DocText, LargeTextHeader } from '@/styles/docs/docs.styled';
import { Divider } from '@/styles/global';
import Link from 'next/link';
import React from 'react';
import { Box } from 'secptrum-ui';

export const QuickStart = () => {
  showLoader();
  return (
    <DocsLayout>
      <Box direction="column" spacing="md">
        <LargeTextHeader>Quick Start</LargeTextHeader>
      </Box>
      <Divider style={{ marginTop: '2rem' }} />
      <Box direction="column" spacing="md" id="basic-usage">
        <HeaderText id="basic-usage">Basic Usage</HeaderText>
        <DocText>
          Below is a basic example that demonstrates the use of the Button
          component and the toast function.
        </DocText>
        <Usage />
      </Box>
      <Box direction="column" spacing="md" id="customization">
        <HeaderText id="customization">Customization</HeaderText>
        <DocText>
          Secptrum UI is designed to be highly flexible, allowing users to apply
          custom styles using the built-in CSS-in-JS{' '}
          <ComponentsBadge>styled</ComponentsBadge> system, or through other
          styling libraries. Here’s how to get started:
        </DocText>
        <DocText>
          For more information on <ComponentsBadge>styled</ComponentsBadge>,
          please refer to the{' '}
          <Link href="/docs/core/styled" style={{ color: 'blue' }}>
            styled
          </Link>{' '}
          documentation.
        </DocText>
      </Box>
      <Box direction="column" spacing="md" id="using-styled">
        <HeaderText id="using-styled" as="h3">
          Using Styled
        </HeaderText>
        <DocText>
          The <ComponentsBadge>styled</ComponentsBadge> system is a powerful way
          to customize your components, allowing you to write CSS in JS.
        </DocText>
        <UsingStyled />
      </Box>
      <Box direction="column" spacing="md" id="using-tailwind">
        <HeaderText id="using-tailwind" as="h3">
          Using Tailwind
        </HeaderText>
        <DocText>
          You can also use Tailwind CSS to style your components. This is useful
          if you are already using Tailwind in your project.
        </DocText>
        <UsingTailwind />
      </Box>
      <NormalInfo style={{ marginTop: '2rem' }}>
        <DocText>
          <b>Note:</b> You might encounter an issue where your custom styles are
          not being applied due to the component default style having higher
          specificity. In such cases, you can use the{' '}
          <ComponentsBadge>!important</ComponentsBadge> flag to override the
          default style or just <ComponentsBadge>!</ComponentsBadge> in
          Tailwind.
        </DocText>
      </NormalInfo>
      <Box direction="column" spacing="md" id="theme">
        <HeaderText id="theme">Theme</HeaderText>
        <DocText>
          Secptrum UI provides a theme system that allows you to customize the
          look and feel of the components.
        </DocText>
        <DocText>
          For more information on the theme system, please refer to the{' '}
          <Link href="/docs/core/theme" style={{ color: 'blue' }}>
            theme
          </Link>{' '}
          documentation.
        </DocText>
      </Box>
    </DocsLayout>
  );
};
