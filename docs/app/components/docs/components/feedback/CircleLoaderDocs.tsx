import React from "react";
import { Container } from "../../start/InstallPage";
import CircleLoader from "@/components/sections/docs/components/CircleLoader";
import DocBar from "@/components/sections/components/DocBar";

// I'm so sorry 😭, But
// Avoid importing CircleLoader from secptrum-ui

const CircleLoaderDocs = () => {
  return (
    <Container>
      <CircleLoader />
      <DocBar />
    </Container>
  );
};

export default CircleLoaderDocs;
