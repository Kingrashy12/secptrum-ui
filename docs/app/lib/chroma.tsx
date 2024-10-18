'use client';

import React, { useState, useEffect } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleSheetManager, styled } from 'styled-chroma'; // Adjust the import path as needed

export default function ChromaRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use the existing styleSheetManager instance
  const [manager] = useState(() => StyleSheetManager);

  useServerInsertedHTML(() => {
    const styles = manager.collectStyles();
    manager.resetStyles();
    return <style dangerouslySetInnerHTML={{ __html: styles }} />;
  });

  useEffect(() => {
    // Clean up styles when the component unmounts
    return () => {
      manager.clearStyles();
    };
  }, [manager]);

  return <>{children}</>;
}

// Re-export the styled function
export { styled };
