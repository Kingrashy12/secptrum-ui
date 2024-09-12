#!/usr/bin/env node

const { Command } = require("commander");
const fs = require("fs-extra");
const path = require("path");

const program = new Command();

program.version("1.0.0").description("Setup SecptrumUI for Next.js");

program
  .command("setup")
  .description("Setup Next.js configuration for SecptrumUI")
  .option("--overwrite", "Overwrite existing _document.tsx if it exists")
  .action(() => {
    const isTypeScript = fs.existsSync(
      path.join(process.cwd(), "tsconfig.json")
    );

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

    const srcPagesPath = join(process.cwd(), "src/pages");
    const documentPath = join(
      srcPagesPath,
      isTypeScript ? "_document.tsx" : "_document.js"
    );
    const babelConfigPath = join(process.cwd(), "babel.config.js");

    // Ensure the src/pages directory exists
    if (!existsSync(srcPagesPath)) {
      mkdirSync(srcPagesPath, { recursive: true });
    }

    // Handle existing _document.tsx or _document.js
    if (existsSync(documentPath)) {
      if (options.overwrite) {
        writeFileSync(
          documentPath,
          isTypeScript ? documentContentTs.trim() : documentContentJs.trim()
        );
        console.log(
          `Overwritten ${isTypeScript ? "src/pages/_document.tsx" : "src/pages/_document.js"} for Next.js.`
        );
      } else {
        console.log(
          `src/pages/${isTypeScript ? "_document.tsx" : "_document.js"} already exists. Use --overwrite to replace it.`
        );
      }
    } else {
      writeFileSync(
        documentPath,
        isTypeScript ? documentContentTs.trim() : documentContentJs.trim()
      );
      console.log(
        `Created ${isTypeScript ? "src/pages/_document.tsx" : "src/pages/_document.js"} for Next.js.`
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
