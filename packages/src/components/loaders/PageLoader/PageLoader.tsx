import { useEffect, useState } from "react";
import { colors } from "../../../styles/colors";
import { css, styled } from "../../../styled";

type PageLoaderType = {
  /** The color of the loader.*/
  color?: string;
  /** If true, the loader will have rounded corners. @default 'true' */
  rounded?: boolean;
  /** The color of the container that holds the loader.*/
  containerColor?: string;
  className?: string;
};

const PageLoader = ({
  rounded,
  color = colors.blue[600],
  containerColor = colors.blue[100],
  className,
}: PageLoaderType) => {
  const [progress, setProgress] = useState(0); // State to track the progress

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
    <Fixed className={className}>
      <Container rounded={rounded || false} containerColor={containerColor}>
        <Loader color={color} progress={progress} />
      </Container>
    </Fixed>
  );
};

export default PageLoader;
PageLoader.displayName = "Sui.PageLoader";

interface IStyleLoader {
  containerColor: string;
  rounded: boolean;
}

const Container = styled<IStyleLoader>("div")`
  background: ${(props) => props.containerColor};
  height: 4px;
  width: 100%;
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.rounded
      ? css`
          border-radius: 3px;
        `
      : ""}
`;

const Loader = styled<{ color: string; progress: number }>("div")`
  background: ${(props) => props.color};
  height: 100%;
  width: ${(props) =>
    `${props.progress}%`}; // Dynamically set width based on progress
  position: absolute;
  border-radius: 3px;
`;

const Fixed = styled("div")`
  position: fixed;
  width: 100%;
  top: 1px;
  z-index: 600;
  top: 0;
`;
