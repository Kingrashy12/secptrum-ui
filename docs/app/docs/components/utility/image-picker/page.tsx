import { ImagePickerDocs } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Backdrop - Secptrum UI',
};

const ImagePicker = () => {
  return (
    <>
      <ImagePickerDocs />
    </>
  );
};

export default ImagePicker;
