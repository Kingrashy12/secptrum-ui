import { Box } from 'secptrum-ui';
import { colors, keyframes, styled } from 'styled-chroma';
import { fonts } from './global';
import Image from 'next/image';

const slideLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const ShowWrap = styled(Box)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 3.5rem;
  gap: 9px;
  overflow: hidden;

  .header {
    color: white;
    font-family: ${fonts.nunito};
    font-size: 1.75rem;
    line-height: 1.5;
    font-weight: 700;
  }
  .collection {
    color: ${(props) => props.theme.colors?.body};
  }
  .empty-list {
    color: ${(props) => props.theme.colors?.body};
    font-family: ${fonts.nunito};
    font-weight: 500;
    text-align: center;
    line-height: 1.35rem;
  }
`;

export const PageHero = styled('header')`
  position: relative;
  height: 300px;
  padding-top: 48px;
  background: linear-gradient(20deg, rgb(33, 33, 33), rgb(66, 66, 66));
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.colors?.divider};
`;

export const HeroContent = styled(Box)`
  max-width: 1280px;
  width: 100%;
  margin: 0px auto;
  padding: 0px 80px;
`;

export const DescTag = styled('h5')`
  color: ${colors.neutral[500]};
  font-family: ${fonts.nunito};
  margin-bottom: 0px;
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.6;
`;

export const ProjectName = styled('p')`
  font-family: ${fonts.poppins};
  font-weight: 600;
  line-height: 1.35rem;
  font-size: 17px;
  color: ${(props) => props.theme.colors?.text};
`;

export const ProjectImage = styled(Image)`
  height: 100%;
  left: 0px;
  top: 0px;
  width: 100%;
  border-radius: 6px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 32px 48px;
`;

export const ShowcaseContainer = styled('div')`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ShowcaseItem = styled<{ direction: 'left' | 'right' }>('div')`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  animation: ${({ direction }) =>
      direction === 'left' ? slideLeft : slideRight}
    0.5s ease-in-out;
`;

const Button = styled('button')`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  border-radius: 9999px;
  border: 1px solid ${(props) => props.theme.colors?.divider};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    scale: 1.1;
  }
`;

export const PrevButton = styled(Button)`
  left: 10px;
`;

export const NextButton = styled(Button)`
  right: 10px;
`;

export const ImageContainer = styled(Box)`
  top: -192px;
  position: absolute;
`;
