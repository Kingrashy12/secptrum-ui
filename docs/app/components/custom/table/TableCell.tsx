import React from "react";
import { TableCell } from "./Table";

type TableCellType = {
  children?: React.ReactNode;
};

const Td = ({ children }: TableCellType) => {
  return <TableCell>{children}</TableCell>;
};

export default Td;
