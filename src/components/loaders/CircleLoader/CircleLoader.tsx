import shouldForwardProp from "../../../utils/is-prop-valid";
import { colors } from "../../../styles/colors";
import styled from "styled-components";

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

const CircleLoader = ({
  size = 50,
  color = "blue",
  containerColor = colors.blue[100],
}: LoaderProps) => {
  return <Spinner color={color} containerColor={containerColor} size={size} />;
};

export default CircleLoader;

const Spinner = styled.div.withConfig({ shouldForwardProp })<{
  size: LoaderProps["size"] | any;
  color: LoaderProps["color"];
  containerColor: LoaderProps["containerColor"];
}>`
  border: ${(props) => props.size / 15}px solid
    ${(props) => props.containerColor};
  border-radius: 50%;
  border-top: ${(props) => props.size / 15}px solid ${(props) => props.color};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  -webkit-animation: spin 0.9s linear infinite; /* Safari */
  animation: spin 0.9s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
