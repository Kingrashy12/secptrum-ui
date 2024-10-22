'use client';

import { DescTag, HeroContent, PageHero, ShowWrap } from '@/styles/styled';
import React, { useEffect } from 'react';
import { AnimatedText, Box, dropIn } from 'secptrum-ui';
import RequestLoader from './custom/RequestLoader';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import EmptyList from './custom/EmptyList';
import ShowCaseItem from './ShowCaseItem';
import RequestErr from './custom/RequestError';
import { loadShowCases } from '@/store/showcase';

const ShowCaseList = () => {
  const showcaseState = useAppSelector((state) => state.showcases);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadShowCases());
  }, [dispatch]);

  return (
    <ShowWrap>
      <PageHero>
        <HeroContent direction="column">
          <AnimatedText
            className="header"
            text="Secptrum UI Showcase Lab"
            animation={dropIn}
          />
          <DescTag>Explore various website built with SecptrumUI</DescTag>
        </HeroContent>
      </PageHero>
      <Box spacing="md">
        {showcaseState.fetchError ? (
          <RequestErr />
        ) : showcaseState.projects.length === 0 ? (
          <EmptyList />
        ) : (
          <ShowCaseItem />
        )}
      </Box>
      <RequestLoader loading={showcaseState.isfetching} />
    </ShowWrap>
  );
};

export default ShowCaseList;
