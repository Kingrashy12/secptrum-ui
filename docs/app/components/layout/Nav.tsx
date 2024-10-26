"use client";

import React, { useState } from "react";
import NavHeader from "./NavHeader";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), { ssr: true });

const Nav = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <NavHeader visible={visible} setVisible={setVisible} />
      <Navbar visible={visible} />
    </>
  );
};

export default Nav;
