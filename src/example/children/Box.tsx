import Box from "../../components/Box/Box";
import React from "react";
import styled from "styled-components";

const StyledBox = styled(Box)`
  flex-direction: column;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
`;

const BoxChild = () => {
  return (
    <StyledBox>
      <p>This is a content inside a Box component.</p>
    </StyledBox>
  );
};

export default BoxChild;
