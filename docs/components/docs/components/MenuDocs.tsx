import ComponentsBadge from "../../custom/ComponentsBadge";
import ApiReference from "../../custom/docs/ApiReference";
import DocsBox from "../../custom/docs/Box";
import HeaderText from "../../custom/docs/HeaderText";
import MenuExample from "../../example/selection/menu/MenuExample";
import MenuExampleUB from "../../example/selection/menu/MenuExampleUB";
import DocsLayout from "../../layout/DocsLayout";
import { menuItemsRef, menuRef } from "../../../data/reference/menu";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider, SpaceTop } from "../../../styles/global";
import React from "react";

const MenuDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader>Menu</LargeTextHeader>
        <DocText onHeader>List of selectable options or actions.</DocText>
      </DocsBox>
      <Divider style={{ marginTop: 10 }} />
      <SpaceTop marginTop="2xl" />
      <DocsBox>
        <MenuExample />
      </DocsBox>
      <DocsBox id="example-user-banner">
        <HeaderText id="example-user-banner">Example: User Banner</HeaderText>
        <DocText>Here&apos;s an example of a menu in a post:</DocText>
        <MenuExampleUB />
      </DocsBox>
      <DocsBox id="api-reference:menu">
        <HeaderText id="api-reference:menu">API Reference: Menu</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>Menu</ComponentsBadge> component.
        </DocText>
        <ApiReference reference={menuRef} />
      </DocsBox>
      <DocsBox id="api-reference:menu-item">
        <HeaderText id="api-reference:menu-item">
          API Reference: MenuItem
        </HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>MenuItem</ComponentsBadge> component.
        </DocText>
        <ApiReference reference={menuItemsRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default MenuDocs;
