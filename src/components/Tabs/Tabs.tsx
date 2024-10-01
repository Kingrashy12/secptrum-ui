import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";

type TabsType = {
  children?: React.ReactNode;
};

const Tab = ({ children }: TabsType) => {
  return <Tabs>{children}</Tabs>;
};

export default Tab;

const Tabs = styled(Box)`
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
