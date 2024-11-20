"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import { useRouter } from "../../hooks";

const Nav = () => {
  const [visible] = useState(true);
  const { pathname } = useRouter();
  return <>{pathname === "/" ? null : <Navbar visible={visible} />}</>;
};

export default Nav;
