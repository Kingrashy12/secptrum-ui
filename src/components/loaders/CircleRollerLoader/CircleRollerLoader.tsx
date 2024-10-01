import shouldForwardProp from "../../../utils/is-prop-valid";
import styled from "styled-components";
type LoaderProps = {
  /**
   * The size of each circle in the loader. Defaults to `40`.
   */
  size?: number;
  /**
   * The color of each circle the loader in the loader. Defaults to `blue`.
   */
  color?: string;
};

/**
 * Props:
 *  - `size`:  The size of each circle in the loader. Defaults to `40`.
 *  - `color`: The color of each circle the loader in the loader. Defaults to `blue`.
 *
 *Usage example:
 * ```
 * <CircleRollerLoader size={25} color='green' />
 * ```
 */
const CircleRollerLoader = ({ color = "blue", size = 40 }: LoaderProps) => {
  return (
    <StyledCircle size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledCircle>
  );
};

export default CircleRollerLoader;

const StyledCircle = styled.div.withConfig({ shouldForwardProp })<{
  size: number;
  color: string;
}>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  div,
  div:after {
    box-sizing: border-box;
  }

  div {
    animation: roll 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7.2px;
    height: 7.2px;
    border-radius: 50%;
    background: ${(props) => props.color};
    margin: -3.6px 0 0 -3.6px;
  }
  div:nth-child(1) {
    animation-delay: -0.036s;
  }
  div:nth-child(1):after {
    top: 62.62742px;
    left: 62.62742px;
  }
  div:nth-child(2) {
    animation-delay: -0.072s;
  }
  div:nth-child(2):after {
    top: 67.71281px;
    left: 56px;
  }
  div:nth-child(3) {
    animation-delay: -0.108s;
  }
  div:nth-child(3):after {
    top: 70.90963px;
    left: 48.28221px;
  }
  div:nth-child(4) {
    animation-delay: -0.144s;
  }
  div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  div:nth-child(5) {
    animation-delay: -0.18s;
  }
  div:nth-child(5):after {
    top: 70.90963px;
    left: 31.71779px;
  }
  div:nth-child(6) {
    animation-delay: -0.216s;
  }
  div:nth-child(6):after {
    top: 67.71281px;
    left: 24px;
  }
  div:nth-child(7) {
    animation-delay: -0.252s;
  }
  div:nth-child(7):after {
    top: 62.62742px;
    left: 17.37258px;
  }
  div:nth-child(8) {
    animation-delay: -0.288s;
  }
  div:nth-child(8):after {
    top: 56px;
    left: 12.28719px;
  }

  @keyframes roll {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
