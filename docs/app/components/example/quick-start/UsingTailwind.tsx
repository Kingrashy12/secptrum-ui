import CodeBlock from '@/components/custom/code/CodeBlock';
import { quickStart } from '@/data/codes/quick-start';
import React from 'react';
import { Card } from 'secptrum-ui';

const UsingTailwind = () => {
  return (
    <Card>
      <CodeBlock code={quickStart.usingTailwind} />
    </Card>
  );
};

export default UsingTailwind;
