import {
  ExtraImagePicker,
  FilePicker,
  ImageRemover,
  SelectedImage,
  SelectedImageContainer,
  Styled_Container,
  UploadIcon,
} from "../../styles/styled";
import React, { useRef, useState } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import Icon from "../Icon/Icon";
import { IoAddSharp, IoClose } from "react-icons/io5";
import { colors } from "../../styles/colors";

interface ImagePickerProps {
  /**
   * A callback function that is triggered when an image is selected.
   * @param image - The selected image data, which can be a base64 string, an ArrayBuffer, or null if no image is selected.
   */
  onImageSelect?: (image: string | ArrayBuffer | null) => void;
  /**
   * Callback function invoked when multiple images are selected
   * Returns an array of image URLs or null if no images are selected
   */
  onMultipleImageSelect?: (image: string[] | null) => void;
  /**
   * Enable or disable multiple image selection
   */
  multiple?: boolean;
  /**
   * Custom styles for the container element.
   *
   * Use `React.CSSProperties` to override default styles
   */
  containerStyles?: React.CSSProperties;
  /**
   * Custom styles for the image element
   *
   * Use `React.CSSProperties` to override default styles
   */
  imageStyles?: React.CSSProperties;
  /**
   * Custom styles for the image picker element
   *
   * Use `React.CSSProperties` to override default styles
   */
  pickerStyles?: React.CSSProperties;
  /**
   * Custom styles for the image remover element
   *
   * Use `React.CSSProperties` to override default styles
   */
  imageRemoverStyles?: React.CSSProperties;
  /**
   * Class name for the container element
   */
  containerClassName?: string;
  /**
   * Class name for the image element
   */
  imageClassName?: string;
  /**
   * Class name for the image picker element
   */
  pickerClassName?: string;
  /**
   * Class name for the image remover element
   */
  imageRemoverClass?: string;
  /**
   * Size of the remove icon
   */
  removeIconSize?: number;
}

const ImagePicker = ({
  onImageSelect,
  multiple,
  onMultipleImageSelect,
  containerStyles,
  pickerStyles,
  imageStyles,
  containerClassName,
  pickerClassName,
  imageClassName,
  imageRemoverClass,
  imageRemoverStyles,
  removeIconSize,
}: ImagePickerProps) => {
  const [images, setImages] = useState<string[] | any[]>([]);
  const [image, setImage] = useState<string | ArrayBuffer | any>("");
  function handlePicker(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files;
    let res = null;
    if (file && file[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = reader.result;
        setImage(image);
        if (onImageSelect) {
          onImageSelect(image);
        } else if (multiple) {
          const newImage = reader.result;
          setImages((prevImage: any) => [...prevImage, newImage]);
          if (onMultipleImageSelect) {
            onMultipleImageSelect(images);
          }
        }
        res = image;
      };
      reader.readAsDataURL(file[0]);
    }
    return res;
  }

  function onRemove(index: number) {
    const filteredImages = images.filter((image, _i) => _i !== index);
    setImages(filteredImages);
    setImage("");
    if (onMultipleImageSelect) {
      onMultipleImageSelect(filteredImages);
    }
  }

  const pickerRef = useRef<HTMLInputElement>(null);
  return (
    <>
      {image || images.length >= 1 ? (
        <SelectedImageContainer
          padding="8px"
          style={containerStyles}
          className={containerClassName}
        >
          {images.length >= 1 ? (
            images.map((img, index) => (
              <Styled_Container>
                <ImageRemover onClick={() => onRemove(index)}>
                  <Icon
                    icon={IoClose}
                    color="white"
                    size={removeIconSize}
                    styles={imageRemoverStyles}
                    className={imageRemoverClass}
                  />
                </ImageRemover>
                <SelectedImage
                  style={imageStyles}
                  src={img}
                  key={index}
                  className={imageClassName}
                  alt="Selected image"
                />
              </Styled_Container>
            ))
          ) : (
            <SelectedImage
              src={image}
              alt="Selected image"
              style={imageStyles}
              className={imageClassName}
              onClick={() => pickerRef.current?.click()}
            />
          )}
          {multiple && (
            <ExtraImagePicker
              padding="15px"
              onClick={() => pickerRef.current?.click()}
            >
              <Icon icon={IoAddSharp} color={colors.neutral300} />
            </ExtraImagePicker>
          )}
          <input
            type="file"
            ref={pickerRef}
            accept="image/png, image/jpeg"
            hidden
            onChange={handlePicker}
          />
        </SelectedImageContainer>
      ) : (
        <FilePicker
          onClick={() => pickerRef.current?.click()}
          style={pickerStyles}
          className={pickerClassName}
        >
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
      )}
    </>
  );
};

export default ImagePicker;
