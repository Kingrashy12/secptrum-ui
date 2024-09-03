import React from "react";
import { CardType } from "../../types";
import { CardWrap } from "../../styles/styled";

const Card = ({ children, ...props }: CardType) => {
  return <CardWrap {...props}>{children}</CardWrap>;
};

export default Card;
