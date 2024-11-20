"use client";

import React from "react";
import { styled } from "secptrum-ui";
import PageLoader from "./PageLoader";

const BackgroundLoader = () => {
  return (
    <BarLoad>
      <PageLoader width={`100%`} rounded />
    </BarLoad>
  );
};

export default BackgroundLoader;

const BarLoad = styled("div")`
  position: fixed;
  width: 100%;
  top: 1px;
  z-index: 600;
  top: 0;
`;
