import { colors } from "../../styles/colors";
import Box from "../../components/Box/Box";
import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";

const StyledChild = styled(Box)`
  width: 100%;
  height: 100px;
  background: ${colors.blue500};
  border-radius: 8px;
  font-weight: 600;
  color: white;
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

const StackChild = () => {
  return (
    <>
      <Button>Button 1</Button>
      <Button variant="outline">Button 2</Button>
      <Button isLoading variant="ghost">
        Button 3
      </Button>
    </>
  );
};

export default StackChild;
