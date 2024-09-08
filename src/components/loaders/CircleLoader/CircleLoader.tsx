import React from "react";
import styled, { keyframes } from "styled-components";
import Box from "../../Box/Box";

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
  containerColor = "lightgray",
}: LoaderProps) => {
  const Spinner = styled.div`
    border: ${size / 15}px solid ${containerColor};
    border-radius: 50%;
    border-top: ${size / 15}px solid ${color};
    width: ${size}px;
    height: ${size}px;
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <Spinner>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Spinner>
  );
};

export default CircleLoader;
