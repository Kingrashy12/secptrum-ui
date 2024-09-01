import { FilePicker, UploadIcon } from "../../styles/styled";
import React, { useRef } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import Icon from "../Icon/Icon";

interface ImagePickerProps {
  /**
   * A callback function that is triggered when an image is selected.
   * @param image - The selected image data, which can be a base64 string, an ArrayBuffer, or null if no image is selected.
   */
  onImageSelect: (image: string | ArrayBuffer | null) => void;
}

const ImagePicker = ({ onImageSelect }: ImagePickerProps) => {
  function handlePicker(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files;
    let res = null;
    if (file && file[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = reader.result;
        onImageSelect(image);
        res = image;
      };
      reader.readAsDataURL(file[0]);
    }
    return res;
  }

  const pickerRef = useRef<HTMLInputElement>(null);
  return (
    <FilePicker onClick={() => pickerRef.current?.click()}>
      <UploadIcon>
        <Icon icon={IoIosCloudUpload} />
      </UploadIcon>
      <p>Select an Image (Formats: PNG, JPEG)</p>
      <input
        type="file"
        ref={pickerRef}
        accept="image/png, image/jpeg"
        hidden
        onChange={handlePicker}
      />
    </FilePicker>
  );
};

export default ImagePicker;
