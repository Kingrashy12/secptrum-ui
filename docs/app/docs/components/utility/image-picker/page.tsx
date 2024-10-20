import { ImagePickerDocs } from "@/components";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ImagePicker - Secptrum UI",
};

const ImagePicker = () => {
  return (
    <>
      <ImagePickerDocs />
    </>
  );
};

export default ImagePicker;
