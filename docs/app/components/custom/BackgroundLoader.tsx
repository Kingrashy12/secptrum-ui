'use client';

import React from 'react';
import { Backdrop, BarLoader, CircularProgress } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const BackgroundLoader = () => {
  return (
    <Backdrop open onClose={() => {}} centerContent>
      <BarLoad>
        <BarLoader width={`100%`} />
      </BarLoad>
      <CircularProgress />
    </Backdrop>
  );
};

export default BackgroundLoader;

const BarLoad = styled('div')`
  position: fixed;
  width: 100%;
  top: 1px;
  z-index: 200;
  top: 0;
`;
