import {
  ExtraImagePicker,
  FilePicker,
  ImageRemover,
  ImagesContainer,
  Picker_ImageContainer,
  SelectedImage,
  SelectedImageContainer,
  UploadIcon,
} from "../../styles/utility/styled";
import React, { useEffect, useRef, useState } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { IoAddSharp, IoClose } from "react-icons/io5";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { colors } from "../../styles/colors";

interface ImagePickerProps {
  /**
   * A callback function that is triggered when an image is selected.
   * @param image - The selected image data, which can be a base64 string, an ArrayBuffer, or null if no image is selected.
   */
  onImageSelect?: (image: string | any) => void;
  /**
   * Callback function invoked when multiple images are selected
   * Returns an array of image URLs or null if no images are selected
   */
  onMultipleImageSelect?: (image: string[] | any[]) => void;
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
  /**
   *@boolean `isPickerOpen` - Determines if the image picker modal is open.
   */
  isPickerOpen: boolean;

  /**
   *@function `closePicker` - Function to close the image picker modal.
   */
  closePicker: () => void;

  /**
   *@param mode - Optional. Specifies the theme mode of the app, either `light` or `dark`.
   */
  mode?: "light" | "dark";

  /**
   *@param autoSelectImage - Optional. If true, images will be added immediately after selection.
   * If false or not provided, images will be added only when the picker is closed.
   */
  autoSelectImage?: boolean;
  /**
   * Determines the stack order of the backdrop, ensuring it appears above other content but behind interactive elements.
   */
  zIndex?: number;
}

/**
 * A versatile component that allows users to select and preview one or multiple images from their device.
 * The ImagePicker supports various image formats, such as PNG and JPEG, and provides a consistent way to handle image uploads.
 *
 * Props:
 * - `onImageSelect`: A callback function that is triggered when a single image is selected.
 *   Receives the selected image data as a parameter, which can be a `string`, `ArrayBuffer`, or `null`.
 * - `onMultipleImageSelect` (optional): A callback function that is triggered when multiple images are selected.
 *   Receives an array of selected image data, where each item is a `string`, `ArrayBuffer`, or `null`.
 * - `multiple` (optional): A boolean prop that, when set to `true`, enables the selection of multiple images.
 *   If `true`, the `onMultipleImageSelect` callback should be used. Defaults to `false`.
 *
 * Features:
 * - Supports common image formats such as PNG and JPEG.
 * - Allows single or multiple image selection based on the `multiple` prop.
 * - Displays a preview of the selected images.
 * - Triggers the appropriate callback function (`onImageSelect` or `onMultipleImageSelect`) with the selected image data,
 *   making it easy to handle in the parent component.
 *
 * Usage:
 * Use the ImagePicker component to enable users to upload images in various scenarios such as forms,
 * user profiles, or galleries. It is flexible enough to handle both single and multiple image uploads.
 *
 * Example:
 * ```
 * // For single image selection:
 * <ImagePicker
 *   onImageSelect={(image) => console.log("Selected Image:", image)}
 * />
 *```
 *
 * ```
 * // For multiple image selection:
 * <ImagePicker
 *   multiple={true}
 *   onMultipleImageSelect={(images) => console.log("Selected Images:", images)}
 * />
 * ```
 */

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
  removeIconSize = 25,
  isPickerOpen,
  closePicker,
  mode,
  zIndex,
  autoSelectImage,
}: ImagePickerProps) => {
  const [images, setImages] = useState<string[] | any[]>([]);
  const [image, setImage] = useState<string | any>("");

  useEffect(() => {
    if (autoSelectImage && images.length > 0) {
      addImage(); // Automatically add images once selected if autoSelectImage is true
    }
  }, [images, autoSelectImage]);

  function addImage() {
    // If autoSelectImage is enabled or the picker is closed, proceed with adding image
    if (multiple && onMultipleImageSelect) {
      onMultipleImageSelect(images);
    } else if (onImageSelect) {
      onImageSelect(image);
    }
  }

  function handlePicker(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files;
    if (file && file[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = reader.result;
        setImage(image);
        if (multiple) {
          const newImage = reader.result;
          setImages((prevImage: any) => [...prevImage, newImage]);
        }
        // If autoSelectImage is true, add the image immediately
        if (autoSelectImage) {
          addImage();
        }
      };

      reader.readAsDataURL(file[0]);
    }
  }

  function onRemove(index: number) {
    const filteredImages = images.filter((_, i) => i !== index);
    setImages(filteredImages);
    setImage("");
    if (onMultipleImageSelect) {
      onMultipleImageSelect(filteredImages);
    }
  }

  const pickerRef = useRef<HTMLInputElement>(null);

  function close() {
    if (!autoSelectImage) {
      // Add the images when the modal is closed
      addImage();
    }

    // Reset images and close the picker modal
    setImage("");
    setImages([]);
    closePicker();
  }

  return (
    <Backdrop zIndex={zIndex} open={isPickerOpen} onClose={close} mode={mode}>
      {image || images.length >= 1 ? (
        <SelectedImageContainer
          style={containerStyles}
          className={containerClassName}
        >
          <ImagesContainer>
            {images.length >= 1 ? (
              images.map((img, index) => (
                <Picker_ImageContainer key={index}>
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
                </Picker_ImageContainer>
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
              <ExtraImagePicker onClick={() => pickerRef.current?.click()}>
                <Icon
                  icon={IoAddSharp}
                  color={colors.neutral[300]}
                  size={removeIconSize}
                />
              </ExtraImagePicker>
            )}
            <input
              type="file"
              ref={pickerRef}
              accept="image/png, image/jpeg"
              hidden
              onChange={handlePicker}
            />
          </ImagesContainer>
          <Button width="50%" onClick={close}>
            Done
          </Button>
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
    </Backdrop>
  );
};

export default ImagePicker;
