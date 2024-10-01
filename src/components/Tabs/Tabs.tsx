import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import { getClassName } from "../../utils/helper/secptrum";

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

Tabs.defaultProps = {
  className: getClassName(Tabs),
};
