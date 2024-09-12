#!/usr/bin/env node

import { Command } from "commander";
import { existsSync, mkdirSync, writeFileSync } from "fs-extra";
import { join } from "path";

const program = new Command();

program.version("1.0.0").description("Setup SecptrumUI for Next.js");

program
  .command("setup")
  .description("Setup Next.js configuration for SecptrumUI")
  .action(() => {
    const isTypeScript = existsSync(join(process.cwd(), "tsconfig.json"));

    const documentContentJs = `
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
    `;

    const documentContentTs = `
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
    `;

    const babelConfigContent = `
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
    `;

    const pagesPath = join(process.cwd(), "pages");
    const documentPath = join(
      pagesPath,
      isTypeScript ? "_document.tsx" : "_document.js"
    );
    const babelConfigPath = join(process.cwd(), "babel.config.js");

    // Ensure the pages directory exists
    if (!existsSync(pagesPath)) {
      mkdirSync(pagesPath);
    }

    // Write _document file based on TypeScript usage
    if (!existsSync(documentPath)) {
      writeFileSync(
        documentPath,
        isTypeScript ? documentContentTs.trim() : documentContentJs.trim()
      );
      console.log(
        `Created ${isTypeScript ? "pages/_document.tsx" : "pages/_document.js"} for Next.js.`
      );
    } else {
      console.log(
        `pages/${isTypeScript ? "_document.tsx" : "_document.js"} already exists, skipping.`
      );
    }

    // Write babel.config.js if it doesn't exist
    if (!existsSync(babelConfigPath)) {
      writeFileSync(babelConfigPath, babelConfigContent.trim());
      console.log("Created babel.config.js for styled-components.");
    } else {
      console.log("babel.config.js already exists, skipping.");
    }
  });

program.parse(process.argv);
