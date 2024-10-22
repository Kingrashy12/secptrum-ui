import React, { useState } from 'react';
// import { Box, Card } from 'secptrum-ui';
import {
  ImageContainer,
  NextButton,
  PrevButton,
  ProjectImage,
  // ProjectName,
  ShowcaseContainer,
  ShowcaseItem,
} from '@/styles/styled';
import { useAppSelector } from '@/hooks/store';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const ShowCaseItem = () => {
  const showcaseState = useAppSelector((state) => state.showcases);
  const data = showcaseState.projects;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  const handleNext = () => {
    setDirection('left'); // Slide left when moving to the next item
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setDirection('right'); // Slide right when moving to the previous item
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <ShowcaseContainer>
      {/* Current item to be displayed */}
      <ShowcaseItem key={currentIndex} direction={direction}>
        <ImageContainer>
          <ProjectImage
            width={100}
            height={100}
            alt={data[currentIndex].name}
            src={data[currentIndex].imageurl}
          />
        </ImageContainer>
      </ShowcaseItem>

      {/* Prev and Next buttons */}
      <PrevButton onClick={handlePrev}>
        <HiChevronLeft size={25} />
      </PrevButton>
      <NextButton onClick={handleNext}>
        <HiChevronRight size={25} />
      </NextButton>
    </ShowcaseContainer>
  );
};

export default ShowCaseItem;
