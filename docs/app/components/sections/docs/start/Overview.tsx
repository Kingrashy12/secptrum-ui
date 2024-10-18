// import TextContent from "@/components/custom/docs/TextContent";
import TextContentWithList from '@/components/custom/docs/TextContentWithList';
import DocsLayout from '@/components/layout/DocsLayout';
import { keyFeature, why_use_list_texts } from '@/data/texts/overflow';
import dynamic from 'next/dynamic';
import React from 'react';

const TextContent = dynamic(
  () => import('@/components/custom/docs/TextContent'),
  { ssr: false }
);

const Overview = () => {
  return (
    <DocsLayout>
      <TextContent
        // largeHeader="Secptrum UI - Overview"
        mediumHeader="Introduction"
        id="introduction"
        isMedium={true}
        bodyText="SecptrumUI is a comprehensive React component library, combining modern design principles with powerful customization. It empowers developers to easily create stunning, responsive, and accessible web applications."
      />
      <TextContent
        id=""
        bodyText="Whether you're starting a new project or enhancing an existing one, SecptrumUI gives you the tools to create consistent, high-quality interfaces with minimal effort."
      />
      <TextContentWithList
        header="Why Use SecptrumUI?"
        id="why-use-secptrum-ui?"
        li={why_use_list_texts}
        isMedium
      />
      <TextContentWithList
        header="Key Features"
        id="key-features"
        li={keyFeature}
        isMedium
      />
    </DocsLayout>
  );
};

export default Overview;
