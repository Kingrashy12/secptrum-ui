export const pickerCodes = {
  basic: `
import React, { useState } from "React";
import { Stack, ImagePicker, toast } from "secptrum-ui";

const BasicPickerExample = () => {
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
     <Stack>
        <ImagePicker
          onImageSelect={handleImageSelect}
          isPickerOpen={openPicker}
          closePicker={() => setOpenPicker(false)}
        />
        {image ? (
          <SelectedImage src={image} onClick={() => setImage("")} />
        ) : (
          <Button variant="outline" onClick={() => setOpenPicker(true)}>
            Upload image
          </Button>
        )}
    </Stack>
  );
};
    `,
  multiple: `
import React, { useState } from "React";
import { Stack, ImagePicker, toast } from "secptrum-ui";

const BasicPickerExample = () => {
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
      const updatedImages = prev.filter((image, _i) => _i !== index);
      return updatedImages;
    });
  }

  return (
     <Stack>
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
  );
};
    `,
  autoSelect: `
import React, { useState } from "React";
import { Stack, ImagePicker, toast } from "secptrum-ui";

const BasicPickerExample = () => {
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
      const updatedImages = prev.filter((image, _i) => _i !== index);
      return updatedImages;
    });
  }

  return (
     <Stack>
        <ImagePicker
          onMultipleImageSelect={handleImageSelect}
          isPickerOpen={openPicker}
          closePicker={() => setOpenPicker(false)}
          multiple
          autoSelectImage
        />

          {images.length >= 1 ? (
            <>
              {images.map((image, index) => (
                <SelectedImage
                  src={image}
                  key={index}
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
  );
};
    `,
};
