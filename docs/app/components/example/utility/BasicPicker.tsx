import CodeBlock from '@/components/custom/code/CodeBlock';
import Media from '@/components/custom/Media';
import { Preview } from '@/styles/docs/start.styled';
import React, { useState } from 'react';
import {
  Stack,
  Button,
  ImagePicker,
  Tabs,
  TabsHandle,
  TabPanel,
  toast,
} from 'secptrum-ui';
import { styled } from 'styled-chroma';

const BasicPicker = ({ code }: { code: string }) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [image, setImage] = useState('');

  function handleImageSelect(image: string) {
    setImage(image);
    if (image) {
      toast.success('Great, now click on the image to remove');
    } else {
      toast.info("😢 You didn't pick any image");
    }
  }

  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Stack spacing="lg" align="horizontal">
            <ImagePicker
              onImageSelect={handleImageSelect}
              isPickerOpen={openPicker}
              closePicker={() => setOpenPicker(false)}
            />

            {image ? (
              <SelectedImage src={image} onClick={() => setImage('')} />
            ) : (
              <Button variant="outline" onClick={() => setOpenPicker(true)}>
                Upload image
              </Button>
            )}
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default BasicPicker;

const SelectedImage = styled(Media)`
  width: 50%;
  border-radius: 12px;
  cursor: pointer;
`;
