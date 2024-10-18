import React from "react";
import { Container } from "../../start/InstallPage";
import CheckboxPage from "@/components/sections/docs/components/CheckboxPage";
import DocBar from "@/components/sections/components/DocBar";

const CheckBoxDocs = () => {
  return (
    <Container>
      <CheckboxPage />
      <DocBar />
    </Container>
  );
};

export default CheckBoxDocs;
