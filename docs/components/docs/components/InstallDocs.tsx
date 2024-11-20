"use client";

import Frameworks from "../../custom/docs/Frameworks";
import HeaderText from "../../custom/docs/HeaderText";
import DocsLayout from "../../layout/DocsLayout";
import { LargeTextHeader, DocText } from "../../../styles/docs/docs.styled";
import { Divider } from "../../../styles/global";
import React from "react";
import { Box, styled } from "secptrum-ui";

const InstallDocs = () => {
  return (
    <DocsLayout>
      <Box direction="column" spacing="md">
        <LargeTextHeader>Installation</LargeTextHeader>
        <DocText>Everything you need to set up Secptrum UI.</DocText>
      </Box>
      <Divider style={{ margin: "12px" }} />
      <Box direction="column" id="prerequisites" spacing="md">
        <HeaderText id="prerequisites">Prerequisites</HeaderText>
        <DocText>Before installing Secptrum UI, ensure you have:</DocText>
        <PrerequisitesList>
          <li>
            React <span>&gt;= 18</span>
          </li>
          <li>
            ReactDom <span>&gt;= 18</span>
          </li>
        </PrerequisitesList>
      </Box>
      <Box direction="column" id="framework-guide" spacing="md">
        <HeaderText id="framework-guide">Framework Guide</HeaderText>
        <DocText>
          Learn how to use Secptrum UI with your favorite framework.
        </DocText>
        <Frameworks />
      </Box>
    </DocsLayout>
  );
};

export default InstallDocs;

const PrerequisitesList = styled("ul")`
  list-style: none;
  padding-left: 10px;

  li {
    position: relative;
    padding-left: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors?.text};
    &::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  span {
    background: ${({ theme }) => theme.colors?.prop};
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    /* color: white; */
  }
`;
