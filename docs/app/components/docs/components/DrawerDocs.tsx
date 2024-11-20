"use client";

import { Box, colors } from "secptrum-ui";
import DocsLayout from "@/components/layout/DocsLayout";
import React from "react";
import { DocText, LargeTextHeader } from "@/styles/docs/docs.styled";
import { Divider } from "@/styles/global";
import DrawerExample from "@/components/example/overlay/drawer/DrawerExample";
import HeaderText from "@/components/custom/docs/HeaderText";
import ComponentsBadge from "@/components/custom/ComponentsBadge";
import DrawerVariant from "@/components/example/overlay/drawer/DrawerVariant";
import DrawerPosition from "@/components/example/overlay/drawer/DrawerPosition";
import ApiReference from "@/components/custom/docs/ApiReference";
import {
  drawerFooterRef,
  drawerHeaderRef,
  drawerRef,
} from "@/data/reference/drawer";
import Link from "next/link";

const DrawerDocs = () => {
  return (
    <DocsLayout>
      <Box direction="column" spacing="md" width="100%">
        <LargeTextHeader>Drawer</LargeTextHeader>
        <DocText onHeader>
          A slide-out panel for displaying extra content, such as menus or
          filters, without leaving the main view. It is configurable to open
          from any side.
        </DocText>
      </Box>
      <Divider style={{ margin: "12px" }} />
      <Box direction="column" spacing="md" width="100%">
        <DrawerExample />
      </Box>
      <Box direction="column" spacing="md" id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </Box>
      <Box direction="column" spacing="md" id="variants">
        <HeaderText id="variants" as="h3">
          Variants
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>variant</ComponentsBadge> prop to change the
          visual style of the button.
        </DocText>
        <DrawerVariant />
      </Box>
      <Box direction="column" spacing="md" id="position">
        <HeaderText id="position" as="h3">
          Position
        </HeaderText>
        <DocText>
          The <ComponentsBadge>Drawer</ComponentsBadge> component can be
          positioned to the <ComponentsBadge>left</ComponentsBadge> or{" "}
          <ComponentsBadge>right</ComponentsBadge> of the screen.
        </DocText>
        <DrawerPosition />
      </Box>
      <Box direction="column" spacing="md" id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          Below you&apos;ll find a reference to the props available for the{" "}
          <ComponentsBadge>Drawer</ComponentsBadge> component.
        </DocText>

        <ApiReference reference={drawerRef} />
      </Box>
      <Box direction="column" spacing="md" id="api-reference:header">
        <HeaderText id="api-reference:header" as="h3">
          DrawerHeader
        </HeaderText>
        <DocText>
          DrawerHeader extends the <ComponentsBadge>Box</ComponentsBadge>{" "}
          component inheriting all its styling, layout properties, and props
          allowing for flexible customization.
        </DocText>

        <ApiReference reference={drawerHeaderRef} />
      </Box>
      <Box direction="column" spacing="md" id="api-reference:footer">
        <HeaderText id="api-reference:footer" as="h3">
          DrawerFooter
        </HeaderText>
        <DocText>
          Below are reference to the props available for{" "}
          <ComponentsBadge>DrawerFooter</ComponentsBadge> component.
        </DocText>

        <ApiReference reference={drawerFooterRef} />
      </Box>
      <Box direction="column" spacing="md" id="api-reference:drawer-content">
        <HeaderText id="api-reference:drawer-content" as="h3">
          DrawerContent
        </HeaderText>
        <DocText>
          The <ComponentsBadge>DrawerContent</ComponentsBadge> component is
          built on top of the <ComponentsBadge>Box</ComponentsBadge> component,
          so all the available props for the{" "}
          <ComponentsBadge>Box</ComponentsBadge> component are also available to
          the <ComponentsBadge>DrawerContent</ComponentsBadge> component.
        </DocText>

        <DocText>
          See the{" "}
          <Link
            style={{ color: colors.blue[500] }}
            href="/docs/components/layout/box"
          >
            Box
          </Link>{" "}
          component for more information.
        </DocText>
      </Box>
    </DocsLayout>
  );
};

export default DrawerDocs;
