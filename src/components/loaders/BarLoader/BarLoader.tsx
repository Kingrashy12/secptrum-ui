import { css, styled } from "styled-chroma";
import { colors } from "../../../styles/colors";
import { barload } from "../keyframes";

type BarLoaderType = {
  width?: string | number;
  height?: string | number;
  color?: string;
  rounded?: boolean;
};

const BarLoader = ({
  width = 100,
  height = 4,
  rounded,
  color = colors.blue[600],
}: BarLoaderType) => {
  const parsedWidth = width.toString().includes("%") ? width : `${width}px`;
  const parsedHeight = height.toString().includes("%") ? height : `${height}px`;
  return (
    <Container
      rounded={rounded || false}
      width={parsedWidth}
      height={parsedHeight}
    >
      <Loader color={color} />
    </Container>
  );
};

export default BarLoader;

interface IStyleLoader {
  width: number | string;
  height: number | string;
  rounded: boolean;
}

const Container = styled<IStyleLoader>("div")`
  background: ${colors.blue[100]};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.rounded
      ? css`
          border-radius: 3px;
        `
      : ""}
`;

const Loader = styled<{ color?: string }>("div")`
  ${(props) => css`
    background: ${props.color};
  `}
  height: 100%;
  width: 25%; /* Initial width of the loader */
  position: absolute;
  animation: ${barload} 1s infinite linear;
  border-radius: 3px;
`;
