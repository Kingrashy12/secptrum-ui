import React from "react";
import DynDocs from "../hooks/dyn";
import TableOfContents from "../../layout/TableOfContents";

const DynPage = () => {
  return (
    <>
      <DynDocs />
      <TableOfContents />
    </>
  );
};

export default DynPage;
