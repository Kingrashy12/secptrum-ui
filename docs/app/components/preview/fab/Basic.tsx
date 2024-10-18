'use client';

import { Preview } from '@/styles/docs/start.styled';
import { fonts } from '@/styles/global';
import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import { Fab } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const BasicFab = () => {
  return (
    <Container>
      <Fab size="lg" variant="light" moveOnScroll position="top-left">
        <IoMenu />
      </Fab>
      <Fab size="lg" moveOnScroll>
        <LuLogOut size={20} />
        <Text>Log out</Text>
      </Fab>
    </Container>
  );
};

export default BasicFab;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

const Text = styled('p')`
  font-size: 13px;
  font-family: ${fonts.poppins};
  font-weight: 500;
  /* color: ${(props) => props.theme.colors?.text}; */
`;
