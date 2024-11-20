import TableOfContents from "../../layout/TableOfContents";
import React from "react";
import ModalDocs from "../components/ModalDocs";

const ModalPage = () => {
  return (
    <>
      <ModalDocs />
      <TableOfContents />
    </>
  );
};

export default ModalPage;
