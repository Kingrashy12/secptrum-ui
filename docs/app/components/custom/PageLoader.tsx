import React, { useEffect, useState } from "react";
import { colors, css, styled } from "secptrum-ui";

type PageLoaderType = {
  width?: string | number;
  height?: string | number;
  color?: string;
  rounded?: boolean;
};

const PageLoader = ({
  width = 100,
  height = 4,
  rounded,
  color = colors.blue[600],
}: PageLoaderType) => {
  const [progress, setProgress] = useState(0); // State to track the progress
  const parsedWidth = width.toString().includes("%") ? width : `${width}px`;
  const parsedHeight = height.toString().includes("%") ? height : `${height}px`;

  // Function to simulate loading progress (you can replace this with actual page loading logic)
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1); // Increment progress
      }
    }, 30); // Update every 30ms (can be adjusted for smoother progress)

    // Clear interval when progress reaches 100%
    if (progress >= 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [progress]);

  return (
    <Container
      rounded={rounded || false}
      width={parsedWidth}
      height={parsedHeight}
    >
      <Loader rounded={rounded || false} color={color} progress={progress} />
    </Container>
  );
};

export default PageLoader;

interface IStyleLoader {
  width: number | string;
  height: number | string;
  rounded: boolean;
}

const Container = styled<IStyleLoader>("div")`
  background: transparent;
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

const Loader = styled<{ color?: string; progress: number; rounded: boolean }>(
  "div"
)`
  ${(props) => css`
    background: ${props.color};
  `};
  height: 100%;
  width: ${(props) =>
    `${props.progress}%`}; // Dynamically set width based on progress
  position: absolute;
  border-radius: ${(props) => (props.rounded ? "3px" : "")};
`;
