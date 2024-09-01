import styled from "styled-components";
import { colors } from "./colors";

export const StyledBox = styled.div`
  position: relative;
  display: flex;
`;
export const FilePicker = styled(StyledBox)`
  border: 2px dashed ${colors.neutral500};
  border-radius: 8px;
  flex-direction: column;
  gap: 3px;
  padding: 6px;
  cursor: pointer;
  width: 100%;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 500;
    font-size: 15px;
    font-family: sans-serif;
    color: ${colors.neutral500};
  }
`;

export const UploadIcon = styled(StyledBox)`
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 9999px;
  background: ${colors.green100};
  padding: 1px;
  margin-top: 2px;

  svg {
    color: ${colors.green500};
  }
`;
