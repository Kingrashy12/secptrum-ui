import CodeBlock from '@/components/custom/code/CodeBlock';
import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { Stack, Tabs, TabsHandle, TabPanel, Button, toast } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const TransitionsToast = ({ code }: { code: string }) => {
  function walkin() {
    toast.success('Profile saved successfully!', {
      position: 'bottom-left',
      transition: 'walkIn',
    });
  }
  function slidein() {
    toast.info('New message received!', {
      position: 'bottom-right',
      transition: 'slideIn',
    });
  }
  function dropin() {
    toast.error('Error processing request!', {
      position: 'top-left',
      transition: 'dropIn',
    });
  }
  function popIn() {
    toast.success('Action completed!', {
      position: 'top-right',
      transition: 'popIn',
    });
  }

  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <PrevContainer align="horizontal" wrap>
            <Button size="lg" onClick={walkin}>
              Walk in
            </Button>
            <Button size="lg" variant="outline" onClick={slidein}>
              Slide in
            </Button>
            <Button size="lg" variant="light" onClick={dropin}>
              Drop in
            </Button>
            <Button size="lg" variant="ghost" onClick={popIn}>
              Pop in
            </Button>
          </PrevContainer>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default TransitionsToast;

export const PrevContainer = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
