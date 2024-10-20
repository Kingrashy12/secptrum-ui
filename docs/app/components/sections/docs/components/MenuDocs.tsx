"use client";

import ComponentsBadge from "@/components/custom/ComponentsBadge";
import HeaderText from "@/components/custom/docs/HeaderText";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import MenuExample from "@/components/example/selection/MenuExample";
import MenuExampleUB from "@/components/example/selection/MenuExampleUB";
import DocsLayout from "@/components/layout/DocsLayout";
import { menuItemsRef, menuRef } from "@/data/reference/menu";
import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import { Divider, SpaceTop } from "@/styles/global";
import React from "react";

const MenuDocs = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Menu</LargeTextHeader>
        <BodyText>List of selectable options or actions.</BodyText>
      </TextContent_Wrap>
      <Divider />
      <SpaceTop marginTop="2xl" />
      <MenuExample />
      <TextContent_Wrap id="example-user-banner">
        <HeaderText id="example-user-banner">Examples: User Banner</HeaderText>
        <BodyText>Here&apos;s an example of a menu in a post:</BodyText>
      </TextContent_Wrap>
      <MenuExampleUB />
      <TextContent_Wrap id="api-reference:menu">
        <HeaderText id="api-reference:menu">API Reference: Menu</HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>Menu</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={menuRef} />
      <TextContent_Wrap id="api-reference:menu-item">
        <HeaderText id="api-reference:menu-item">
          API Reference: MenuItem
        </HeaderText>
        <BodyText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>MenuItem</ComponentsBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={menuItemsRef} />
    </DocsLayout>
  );
};

export default MenuDocs;
