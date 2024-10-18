import React from "react";
import { Container } from "../../start/InstallPage";
import SwitchPage from "@/components/sections/docs/components/SwitchPage";
import DocBar from "@/components/sections/components/DocBar";

const SwitchDocs = () => {
  return (
    <Container>
      <SwitchPage />
      <DocBar />
    </Container>
  );
};

export default SwitchDocs;
