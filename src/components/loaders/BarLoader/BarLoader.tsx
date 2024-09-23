import React from "react";
import { colors } from "../../../styles/colors";
import styled from "styled-components";
import shouldForwardProp from "../../../utils/is-prop-valid";

type BarLoaderType = {
  width?: string | number;
  height?: string | number;
  color?: string;
};

const BarLoader = ({
  width = 100,
  height = 4,
  color = colors.blue[600],
}: BarLoaderType) => {
  const parsedWidth = width.toString().includes("%") ? width : `${width}px`;
  const parsedHeight = height.toString().includes("%") ? height : `${height}px`;
  return (
    <Container width={parsedWidth} height={parsedHeight}>
      <Loader color={color} />
    </Container>
  );
};

export default BarLoader;

const Container = styled.div.withConfig({ shouldForwardProp })<{
  width: number | string;
  height: number | string;
}>`
  background: ${colors.blue[100]};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: relative;
  overflow: hidden;
`;

const Loader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "color",
})<{ color?: string }>`
  background: ${(props) => props.color};
  height: 100%;
  width: 25%; /* Initial width of the loader */
  position: absolute;
  animation: move 1s infinite linear;
  border-radius: 3px;

  @keyframes move {
    0% {
      width: 25%; /* Initial width */
      left: 0;
    }
    25% {
      width: 45%; /* Wider width */
      left: 25%;
    }
    50% {
      width: 65%; /* Even wider width */
      left: 50%;
    }
    75% {
      width: 45%; /* Return to a narrower width */
      left: 75%;
    }
    100% {
      width: 25%; /* Return to initial width */
      left: 100%;
    }
  }
`;
