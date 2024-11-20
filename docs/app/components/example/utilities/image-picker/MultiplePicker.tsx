import CodeBlock from "@/components/custom/code/CodeBlock";
import Media from "@/components/custom/Media";
import { pickerCodes } from "@/data/codes/picker";
import React, { useState } from "react";
import {
  Stack,
  Button,
  ImagePicker,
  Tabs,
  TabHandle,
  TabPanel,
  toast,
  styled,
  Card,
} from "secptrum-ui";

const MultiplePicker = () => {
  const [openPicker, setOpenPicker] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  function handleImageSelect(Images: string[]) {
    setImages(Images);
    if (Images.length >= 1) {
      toast.success("Great, now click on the image to remove");
    } else {
      toast.info("😢 You didn't pick any image");
    }
  }

  function removeImage(index: number) {
    setImages((prev) => {
      const updatedImages = prev.filter((_, _i) => _i !== index);
      return updatedImages;
    });
  }

  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Stack spacing="lg" align="horizontal" wrap>
            <ImagePicker
              onMultipleImageSelect={handleImageSelect}
              isPickerOpen={openPicker}
              closePicker={() => setOpenPicker(false)}
              multiple
            />

            {images.length >= 1 ? (
              <>
                {images.map((image, index) => (
                  <SelectedImage
                    src={image}
                    key={index}
                    width={100}
                    height={100}
                    onClick={() => removeImage(index)}
                  />
                ))}
              </>
            ) : (
              <Button variant="outline" onClick={() => setOpenPicker(true)}>
                Upload image
              </Button>
            )}
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={pickerCodes.multiple} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default MultiplePicker;

const SelectedImage = styled(Media)`
  width: 100px;
  border-radius: 12px;
  cursor: pointer;
  flex-wrap: wrap;
`;
