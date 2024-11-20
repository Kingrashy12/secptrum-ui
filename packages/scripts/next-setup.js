#!/usr/bin/env node

const { Command } = require('commander');
const { existsSync, mkdirSync, writeFileSync } = require('fs-extra');
const { join } = require('path');
const customChalk = require('./chalk');

const program = new Command();

program.version('1.0.0').description('Setup SecptrumUI for Next.js');

program
  .command('init')
  .description('Initialize SecptrumUI setup for Next.js')
  .action(() => {
    const isTypeScript = existsSync(join(process.cwd(), 'tsconfig.json'));

    const registryContentJs = `'use client';

import { useServerInsertedHTML } from "next/navigation";
import { renderStyles, StyleSheetManager } from "secptrum-ui";

const SecptrumUIRegistry = ({ children }) => {
  useServerInsertedHTML(() => {
    const styles = renderStyles();
    StyleSheetManager.clearStyles();
    return (
      <style
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <>{children}</>;
};

export SecptrumUIRegistry;
SecptrumUIRegistry.displayName = "Sui.SecptrumUIRegistry";
`;

    const registryContentTs = `'use client';

import { useServerInsertedHTML } from "next/navigation";
import { renderStyles, StyleSheetManager } from "secptrum-ui";

const SecptrumUIRegistry = ({ children }: { children: React.ReactNode }) => {
  useServerInsertedHTML(() => {
    const styles = renderStyles();
    StyleSheetManager.clearStyles();
     return (
      <style
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <>{children}</>;
};

export SecptrumUIRegistry;
SecptrumUIRegistry.displayName = "Sui.SecptrumUIRegistry";
`;

    // Check if src or app directory exists
    const srcPath = existsSync(join(process.cwd(), 'src'))
      ? join(process.cwd(), 'src')
      : join(process.cwd(), 'app');

    // Set libPath based on srcPath, fallback to root if neither found
    const libPath = existsSync(srcPath)
      ? join(srcPath, 'lib')
      : join(process.cwd(), 'lib');
    const registryPath = join(
      libPath,
      isTypeScript ? 'registry.tsx' : 'registry.js'
    );

    // Ensure the lib directory exists
    if (!existsSync(libPath)) {
      mkdirSync(libPath, { recursive: true });
      console.log(customChalk.green(`\u2714 Created ${libPath} directory.`));
    }

    // Write the registry file if it doesn't exist
    if (!existsSync(registryPath)) {
      writeFileSync(
        registryPath,
        isTypeScript ? registryContentTs.trim() : registryContentJs.trim()
      );
      console.log(
        `\r${customChalk.green('\u2714')} Created ${
          isTypeScript ? 'registry.tsx' : 'registry.js'
        } in ${libPath}.\n`
      );
    } else {
      console.log(
        `\r${customChalk.blue('\u2139')} ${
          isTypeScript ? 'registry.tsx' : 'registry.js'
        } already exists in ${libPath}, skipping.\n`
      );
    }
  });

program.parse(process.argv);
