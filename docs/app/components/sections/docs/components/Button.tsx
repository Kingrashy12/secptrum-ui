'use client';

import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from '@/styles/docs/start.styled';
import React from 'react';
import ButtonPreview from '../../components/Button';
import { buttonCodes } from '@/data/code/button';
import ButtonVaraints from '@/components/preview/button/Varaints';
import DescriptionBox from '@/components/custom/docs/DescriptionBox';
import {
  button_radius_desc,
  button_size_desc,
  button_variant_desc,
} from '@/data/texts/button';
import ButtonSize from '@/components/preview/button/Size';
import ButtonRadius from '@/components/preview/button/Radius';
import ButtonLoading from '@/components/preview/button/Loading';
import ReferenceTable from '@/components/custom/docs/ReferenceTable';
import { buttonRef } from '@/data/reference/button';
import DocsLayout from '@/components/layout/DocsLayout';
import { Divider } from '@/styles/global';
import ComponentsBadge from '@/components/custom/ComponentsBadge';
import HeaderText from '@/components/custom/docs/HeaderText';

const Button = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Button</LargeTextHeader>
        <BodyText>
          The Button component is an essential element of any UI. It&apos;s used
          for actions such as submitting forms, performing tasks, or triggering
          events. The button component is customizable with different styles,
          sizes, and states to fit various use cases.
        </BodyText>
      </TextContent_Wrap>
      <Divider style={{ marginBottom: 15 }} />
      <ButtonPreview code={buttonCodes.basic} />
      <TextContent_Wrap id="variants">
        <HeaderText id="variants">Variants</HeaderText>
        <BodyText>
          The Button component comes with five distinct variants to cater to
          different design needs.
        </BodyText>
      </TextContent_Wrap>
      <DescriptionBox
        header="Variant Description"
        footer="Variant Showcase"
        li={button_variant_desc}
      />
      <ButtonVaraints code={buttonCodes.variants} />
      <TextContent_Wrap id="sizes">
        <HeaderText id="sizes">Sizes</HeaderText>
        <BodyText>
          The Button component comes with five distinct variants to cater to
          different design needs.
        </BodyText>
      </TextContent_Wrap>
      <DescriptionBox
        header="Size Options"
        footer="Size Showcase"
        li={button_size_desc}
      />
      <ButtonSize code={buttonCodes.size} />
      <TextContent_Wrap id="radius">
        <HeaderText id="radius">Radius</HeaderText>
        <BodyText>
          The Button component supports adjustable radius options for customized
          corners.
        </BodyText>
      </TextContent_Wrap>
      <DescriptionBox
        header="Radius Options"
        footer="Radius Showcase"
        li={button_radius_desc}
      />
      <ButtonRadius code={buttonCodes.radius} />
      <TextContent_Wrap id="loading-state">
        <HeaderText id="loading-state">Loading State</HeaderText>
        <BodyText>
          The Button component supports a loading state to indicate ongoing
          processes, use the <ComponentsBadge>isLoading</ComponentsBadge>
          prop .
        </BodyText>
      </TextContent_Wrap>
      <ButtonLoading code={buttonCodes.loading} />
      <TextContent_Wrap id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <BodyText>
          This component builds upon the HTML{' '}
          <ComponentsBadge>button</ComponentsBadge> element, supporting all its
          native props and attributes, and adds custom functionality and styling
          capabilities.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={buttonRef} />
    </DocsLayout>
  );
};

export default Button;
