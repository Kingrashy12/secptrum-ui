import React from "react";
import { Container } from "../../start/InstallPage";
import Tabs_Page from "@/components/sections/docs/components/TabsPage";
import DocBar from "@/components/sections/components/DocBar";

const TabsDocs = () => {
  return (
    <Container>
      <Tabs_Page />
      <DocBar />
    </Container>
  );
};

export default TabsDocs;
