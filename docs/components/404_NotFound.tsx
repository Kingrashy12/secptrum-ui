"use client";

import React from "react";
import { Box, styled } from "secptrum-ui";
import Typography from "./custom/Typography";
import Media from "./custom/Media";
import { Page_Not_Found } from "../assets";
import BackgroundLoader from "./custom/BackgroundLoader";

const NotFound_404 = () => {
  if (typeof window === "undefined") return <BackgroundLoader />;
  return (
    <Container centered direction="column" fullWidth>
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

const Container = styled(Box)`
  gap: 1.5rem;
  justify-content: center;

  p {
    color: ${(props) => props.theme.colors?.body};
    text-align: center;
  }
`;

const Icon = styled(Media)`
  width: 180px;
`;
