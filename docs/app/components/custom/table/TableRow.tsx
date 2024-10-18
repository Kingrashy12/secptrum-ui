import React from "react";
import { TableRow } from "./Table";

type TableRowType = {
  children?: React.ReactNode;
};

const Tr = ({ children }: TableRowType) => {
  return <TableRow>{children}</TableRow>;
};

export default Tr;
