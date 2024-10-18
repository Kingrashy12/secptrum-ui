import Image, { StaticImageData } from 'next/image';
import React, { ComponentProps } from 'react';

type ImageProps = ComponentProps<'img'>;

interface ImageType extends ImageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: string | StaticImageData | any;
  width?: number;
  height?: number;
}

const Media = ({ src, ...props }: ImageType) => {
  return (
    <Image
      {...props}
      src={src}
      alt={props.alt || ''}
      width={props.width}
      height={props.height}
    />
  );
};

export default Media;
