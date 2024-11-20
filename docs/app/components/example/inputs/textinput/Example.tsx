import React from 'react';
import { styled, TextInput, Card } from 'secptrum-ui';

const InputHero = () => {
  return (
    <Container fullWidth>
      <TextInput Type="text" name="group" variant="outline" />
    </Container>
  );
};

export default InputHero;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;
`;
