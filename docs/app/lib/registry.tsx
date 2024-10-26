"use client";

import { ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { renderStyles, StyleSheetManager } from "styled-chroma";

interface RegistryProps {
  children: ReactNode;
}

const ChromaRegistry = ({ children }: RegistryProps) => {
  useServerInsertedHTML(() => {
    const styles = renderStyles();
    StyleSheetManager.clearStyles();
    return <style dangerouslySetInnerHTML={{ __html: styles }} />;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return <>{children}</>;
};

export default ChromaRegistry;
ChromaRegistry.displayName = "ChromaRegistry";
