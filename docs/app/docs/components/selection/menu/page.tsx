import { MenuPage } from "@/components";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Menu - Secptrum UI",
};

const Menu = () => {
  return (
    <>
      <MenuPage />
    </>
  );
};

export default Menu;
