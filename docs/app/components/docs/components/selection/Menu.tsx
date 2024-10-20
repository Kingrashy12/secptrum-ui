import React from "react";
import { Container } from "../../start/InstallPage";
import DocBar from "@/components/sections/components/DocBar";
import MenuDocs from "@/components/sections/docs/components/MenuDocs";

const Menu = () => {
  return (
    <Container>
      <MenuDocs />
      <DocBar />
    </Container>
  );
};

export default Menu;
