/* eslint-disable @typescript-eslint/no-explicit-any */

import { css, styled } from "styled-chroma";
import { colors } from "../../../styles/colors";
import { spin } from "../keyframes";

type LoaderProps = {
  /**
   * Diameter of the loader
   */
  size?: number;
  /**
   * Color of the dynamic loading portion, Accept only string
   */
  color?: string;
  /**
   * Color of the static base circle
   */
  containerColor?: string;
};

/**
 * CircleLoader component
 *
 * A customizable circular loading indicator.
 *
 * @component
 * @param {Object} props - The component props
 * @param {number} [props.size=50] - The diameter of the loader in pixels
 * @param {string} [props.color="blue"] - The color of the dynamic loading portion
 * @param {string} [props.containerColor=colors.blue[100]] - The color of the static base circle
 * @returns {React.ReactElement} A circular loader component
 *
 * @example
 * <CircleLoader size={60} color="red" containerColor="#f0f0f0" />
 */

const CircleLoader = ({
  size = 50,
  color = "blue",
  containerColor = colors.blue[100],
}: LoaderProps) => {
  return <Spinner color={color} containerColor={containerColor} size={size} />;
};

export default CircleLoader;
interface IStyleLoader {
  size: LoaderProps["size"] | any;
  color: LoaderProps["color"];
  containerColor: LoaderProps["containerColor"];
}
const Spinner = styled<IStyleLoader>("div")`
  border: ${(props) => props.size / 15}px solid
    ${(props) => props.containerColor || ""};
  border-radius: 50%;
  ${(props) => css`
    border-top: ${props.size / 15}px solid ${props.color};
  `}
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: ${spin} 1s linear infinite;
`;
