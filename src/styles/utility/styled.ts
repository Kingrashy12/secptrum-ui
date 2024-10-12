import { styled } from "styled-chroma";
import Box from "../../components/Box/Box";
import { colors } from "../colors";

//***********ImagePicker Components************//
// ImagePicker styles
export const FilePicker = styled(Box)`
  border: 2px dashed ${colors.neutral[500]};
  border-radius: 8px;
  flex-direction: column;
  gap: 12px;
  padding: 6px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  /* width: 400px; */
  width: 50vw;
  height: 150px;

  p {
    font-weight: 500;
    font-size: 15px;
    font-family: inherit;
    color: ${colors.neutral[500]};
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const UploadIcon = styled(Box)`
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 9999px;
  background: ${colors.green[100]};
  padding: 1px;
  margin-top: 2px;

  svg {
    color: ${colors.green[500]};
  }
`;

export const SelectedImage = styled("img")`
  width: 115px;
  height: 115px;
  border-radius: 9px;
  cursor: pointer;
  z-index: 0;
  border: 1px solid ${colors.neutral[300]};

  @media screen and (max-width: 1440px) {
    width: 125px;
    height: 125px;
  }
  @media screen and (max-width: 1366px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (max-width: 1280px) {
    width: 115px;
    height: 115px;
  }
  @media screen and (max-width: 1024px) {
    width: 123px;
    height: 123px;
  }
  @media screen and (max-width: 768px) {
    width: 135px;
    height: 135px;
  }
  @media screen and (max-width: 712px) {
    width: 170px;
    height: 170px;
  }
  @media screen and (max-width: 550px) {
    width: 183px;
    height: 183px;
  }
  @media screen and (max-width: 414px) {
    width: 100%;
    height: 100%;
  }
`;

export const SelectedImageContainer = styled(Box)`
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid ${colors.neutral[300]};
  background: white;

  width: 50vw;
  min-height: 250px;
  height: auto;
  max-height: 80%;
  border-radius: 8px;
  padding: 12px 10px;

  @media screen and (max-width: 1440px) {
    padding: 18px 19px;
  }
  @media screen and (max-width: 1366px) {
    padding: 15px 16px;
  }
  @media screen and (max-width: 1280px) {
    padding: 12px 10px;
  }
  @media screen and (max-width: 1024px) {
    width: 700px;
    padding: 15px 14px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 16px 15px;
    gap: 16px;
  }
  @media screen and (max-width: 712px) {
    gap: 28px;
  }
  @media screen and (max-width: 550px) {
    width: 95%;
    gap: 30px;
  }
`;

export const ImagesContainer = styled(Box)`
  flex-wrap: wrap;
  gap: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 2px;
    display: none;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const ExtraImagePicker = styled(Box)`
  /* flex-direction: column; */
  align-content: center;
  justify-content: center;
  border: 2px dashed ${colors.neutral[300]};
  background: white;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  width: 110px;
  height: 110px;

  svg {
    align-self: center;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1440px) {
    width: 125px;
    height: 125px;
  }
  @media screen and (max-width: 1366px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (max-width: 1280px) {
    width: 115px;
    height: 115px;
  }
  @media screen and (max-width: 768px) {
    width: 135px;
    height: 135px;
  }
  @media screen and (max-width: 712px) {
    width: 170px;
    height: 170px;
  }
  @media screen and (max-width: 550px) {
    width: 183px;
    height: 183px;
  }
  @media screen and (max-width: 414px) {
    width: 100%;
    height: 250px;
  }
`;

export const Picker_ImageContainer = styled(Box)`
  flex-direction: column;
  gap: 2px;
`;

export const ImageRemover = styled("div")`
  position: absolute;
  background: black;
  z-index: 10;
  width: 30px;
  height: 30px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  &:hover {
    opacity: 0.75;
  }
`;
