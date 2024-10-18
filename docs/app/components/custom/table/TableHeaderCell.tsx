import React from "react";
import { TableHeaderCell } from "./Table";

type TableHeaderCellType = {
  children?: React.ReactNode;
};

const Th = ({ children }: TableHeaderCellType) => {
  return <TableHeaderCell>{children}</TableHeaderCell>;
};

export default Th;
