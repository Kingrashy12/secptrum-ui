import React from "react";
import { Container } from "../../start/InstallPage";
import Modal from "@/components/sections/docs/components/Modal";
import DocBar from "@/components/sections/components/DocBar";

// I'm so sorry 😭, But
// Avoid importing modal from secptrum-ui
const ModalDocs = () => {
  return (
    <Container>
      <Modal />
      <DocBar />
    </Container>
  );
};

export default ModalDocs;
