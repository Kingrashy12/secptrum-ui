#!/usr/bin/env node

const { Command } = require("commander");
const { existsSync, mkdirSync, writeFileSync } = require("fs-extra");
const { join } = require("path");

const program = new Command();

program.version("1.0.0").description("Setup SecptrumUI for Next.js");

program
  .command("setup")
  .description("Setup Next.js configuration for SecptrumUI")
  .action(() => {
    const isTypeScript = existsSync(join(process.cwd(), "tsconfig.json"));

    const registryContentJs = `'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
`;

    const registryContentTs = `'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
`;

    // Determine paths
    const srcPath = join(process.cwd(), "src");
    const libPath = existsSync(srcPath)
      ? join(srcPath, "lib")
      : join(process.cwd(), "lib");
    const registryPath = join(
      libPath,
      isTypeScript ? "registry.tsx" : "registry.js"
    );

    // Ensure the lib directory exists
    if (!existsSync(libPath)) {
      mkdirSync(libPath, { recursive: true });
      console.log(`Created ${libPath} directory.`);
    }

    // Write the registry file based on TypeScript usage
    if (!existsSync(registryPath)) {
      writeFileSync(
        registryPath,
        isTypeScript ? registryContentTs.trim() : registryContentJs.trim()
      );
      console.log(
        `Created ${isTypeScript ? "registry.tsx" : "registry.js"} in ${libPath}.`
      );
    } else {
      console.log(
        `${isTypeScript ? "registry.tsx" : "registry.js"} already exists in ${libPath}, skipping.`
      );
    }
  });

program.parse(process.argv);
