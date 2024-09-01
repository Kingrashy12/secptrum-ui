import { StyledBox } from "../../styles/styled";
import { BoxType } from "@/types";
import React from "react";

const Box = ({ children, ...props }: BoxType) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
