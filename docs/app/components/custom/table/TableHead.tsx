import React from "react";
import { TableHead } from "./Table";

type TableHeaderType = {
  children?: React.ReactNode;
};

const Th = ({ children }: TableHeaderType) => {
  return <TableHead>{children}</TableHead>;
};

export default Th;
