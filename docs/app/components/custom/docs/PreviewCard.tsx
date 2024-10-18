import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import CodeBlock from '../code/CodeBlock';
import { Stack, Tabs, TabsHandle, TabPanel, toast, Button } from 'secptrum-ui';
import { styled } from 'styled-chroma';

type PreviewCardType = {
  code: string;
};

const PreviewCard = ({ code }: PreviewCardType) => {
  // const { mode } = useTheme();
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Conatiner>
            <Button
              size="lg"
              radius="lg"
              variant="outline"
              onClick={() =>
                toast.success('This is a success message!', {
                  transition: 'dropIn',
                })
              }
            >
              Make a toast
            </Button>
          </Conatiner>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default PreviewCard;

const Conatiner = styled(Stack)`
  width: auto;

  button {
    width: auto;
  }
`;
