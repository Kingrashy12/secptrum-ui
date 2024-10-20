import { BoxDocs } from "@/components";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Box - Secptrum UI",
};

const Box = () => {
  return (
    <>
      <BoxDocs />
    </>
  );
};

export default Box;
