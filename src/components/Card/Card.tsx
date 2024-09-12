import React from "react";
import { CardType } from "../../types";
import { CardWrap } from "../../styles/styled";

const Card = ({ children, centerContent, ...props }: CardType) => {
  return (
    <CardWrap
      {...props}
      className={props.className}
      centerContent={centerContent}
    >
      {children}
    </CardWrap>
  );
};

export default Card;
