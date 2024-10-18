import React from "react";
import { Container } from "../../start/InstallPage";
import ImagePickerPage from "@/components/sections/docs/components/ImagePickerPage";
import DocBar from "@/components/sections/components/DocBar";

const ImagePickerDocs = () => {
  return (
    <Container>
      <ImagePickerPage />
      <DocBar />
    </Container>
  );
};

export default ImagePickerDocs;
