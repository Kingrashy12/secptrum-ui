import { NextDocsPage } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Setup | Secptrum UI',
  description: 'Everything you need to set up Secptrum UI with Next.js.',
};

export default function Nextjs() {
  return <NextDocsPage />;
}
