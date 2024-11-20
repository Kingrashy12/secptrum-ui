'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { renderStyles, StyleSheetManager } from 'secptrum-ui';

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

export default SecptrumUIRegistry;
SecptrumUIRegistry.displayName = 'SecptrumUIRegistry';
