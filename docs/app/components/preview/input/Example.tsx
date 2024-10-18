import { Preview } from '@/styles/docs/start.styled';
import React from 'react';
import { TextInput } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const InputHero = () => {
  return (
    <Container>
      <TextInput Type="text" name="group" variant="outline" />
    </Container>
  );
};

export default InputHero;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;
`;
