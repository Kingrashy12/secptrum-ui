'use client';

import React from 'react';
import { Stack } from 'secptrum-ui';
import Typography from './custom/Typography';
import Media from './custom/Media';
import { Page_Not_Found } from '@/assets';
import { styled } from 'styled-chroma';

const NotFound_404 = () => {
  return (
    <Container>
      <Icon
        src={Page_Not_Found?.src}
        alt="Page not found"
        width={180}
        height={180}
      />
      <Typography>
        The requested page was not found or is not ready yet.
      </Typography>
    </Container>
  );
};

export default NotFound_404;

const Container = styled(Stack)`
  gap: 1.5rem;
  height: 100vh;

  p {
    color: ${(props) => props.theme.colors?.body};
    text-align: center;
  }
`;

const Icon = styled(Media)`
  width: 180px;
`;
