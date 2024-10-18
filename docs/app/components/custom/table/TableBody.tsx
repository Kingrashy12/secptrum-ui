import React from "react";
import { TableBody } from "./Table";

type TableBodyType = {
  children?: React.ReactNode;
};

const Tb = ({ children }: TableBodyType) => {
  return <TableBody>{children}</TableBody>;
};

export default Tb;
