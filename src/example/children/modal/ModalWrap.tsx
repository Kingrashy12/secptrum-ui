import React from "react";
import ModalProvider from "../../../context/useModal";
import ModalDocs from "../Modal";

const ModalWrap = () => {
  return (
    <ModalProvider>
      <ModalDocs />
    </ModalProvider>
  );
};

export default ModalWrap;
