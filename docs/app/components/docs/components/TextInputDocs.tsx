'use client';

import ComponentsBadge from '@/components/custom/ComponentsBadge';
import ApiReference from '@/components/custom/docs/ApiReference';
import HeaderText from '@/components/custom/docs/HeaderText';
import NormalInfo from '@/components/custom/docs/NormalInfo';
import DisabledTextInput from '@/components/example/inputs/textinput/Disabled';
import TextInputWithError from '@/components/example/inputs/textinput/Error';
import InputHero from '@/components/example/inputs/textinput/Example';
import TextInput_Password from '@/components/example/inputs/textinput/Password';
import TextInputRadius from '@/components/example/inputs/textinput/Radius';
import TextInputVariants from '@/components/example/inputs/textinput/Variants';
import DocsLayout from '@/components/layout/DocsLayout';
import { inputRef } from '@/data/reference/textinput';
import showLoader from '@/hooks/showLoader';
import { DocText, LargeTextHeader } from '@/styles/docs/docs.styled';
import { Divider } from '@/styles/global';
import React from 'react';
import { Box } from 'secptrum-ui';

const TextInputDocs = () => {
  showLoader();
  return (
    <DocsLayout>
      <Box direction="column" spacing="md" width="100%">
        <LargeTextHeader>TextInput</LargeTextHeader>
        <DocText onHeader>A versatile text input field</DocText>
      </Box>
      <Divider style={{ margin: '12px' }} />
      <InputHero />
      <Box direction="column" spacing="md" id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </Box>
      <Box direction="column" spacing="md" id="variants">
        <HeaderText id="variants" as="h3">
          Variants
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>variant</ComponentsBadge> prop to change the
          visual style of the input.
        </DocText>
        <TextInputVariants />
      </Box>
      <Box direction="column" spacing="md" id="radius">
        <HeaderText id="radius" as="h3">
          Radius
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>radius</ComponentsBadge> prop to change the
          border-radius of the input
        </DocText>
        <TextInputRadius />
      </Box>
      <Box direction="column" spacing="md" id="password">
        <HeaderText id="password" as="h3">
          Password
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>Type</ComponentsBadge> prop to make the input
          a secureText entry
        </DocText>
        <TextInput_Password />
      </Box>
      <Box direction="column" spacing="md" id="error">
        <HeaderText id="error" as="h3">
          Error
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>hasError</ComponentsBadge> prop to indicate
          an error state below the input, and use the{' '}
          <ComponentsBadge>errorMessage</ComponentsBadge> prop to display the
          error message.
        </DocText>
        <TextInputWithError />
      </Box>
      <Box direction="column" spacing="md" id="disabled">
        <HeaderText id="disabled" as="h3">
          Disabled
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>disabled</ComponentsBadge> prop to disable
          the textinput
        </DocText>
        <DisabledTextInput />
      </Box>
      <NormalInfo style={{ marginTop: 20 }}>
        <DocText>
          <b>Note:</b> While using the <ComponentsBadge>icon</ComponentsBadge>{' '}
          prop avoid wrapping the icon in a fragment ({'<>...</>'} or{' '}
          {'<FaUser/>'}) as this may cause the component to break.
        </DocText>
      </NormalInfo>
      <Box direction="column" spacing="md" id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          This component extends the <ComponentsBadge>input</ComponentsBadge>
          element and accepts all its props.
        </DocText>

        <ApiReference reference={inputRef} />
      </Box>
    </DocsLayout>
  );
};

export default TextInputDocs;
