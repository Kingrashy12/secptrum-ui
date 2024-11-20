import CodeBlock from "../../../custom/code/CodeBlock";
import Media from "../../../custom/Media";
import { pickerCodes } from "../../../../data/codes/picker";
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

const BasicPicker = () => {
  const [openPicker, setOpenPicker] = useState(false);
  const [image, setImage] = useState("");

  function handleImageSelect(image: string) {
    setImage(image);
    if (image) {
      toast.success("Great, now click on the image to remove");
    } else {
      toast.info("😢 You didn't pick any image");
    }
  }

  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Stack spacing="lg" align="horizontal">
            <ImagePicker
              onImageSelect={handleImageSelect}
              isPickerOpen={openPicker}
              closePicker={() => setOpenPicker(false)}
            />

            {image ? (
              <SelectedImage
                src={image}
                width={50}
                height={50}
                onClick={() => setImage("")}
              />
            ) : (
              <Button variant="outline" onClick={() => setOpenPicker(true)}>
                Upload image
              </Button>
            )}
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={pickerCodes.basic} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default BasicPicker;

const SelectedImage = styled(Media)`
  width: 50%;
  height: 50%;
  border-radius: 12px;
  cursor: pointer;
`;
