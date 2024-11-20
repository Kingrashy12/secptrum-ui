"use client";

import ComponentsBadge from "@/components/custom/ComponentsBadge";
import ApiReference from "@/components/custom/docs/ApiReference";
import HeaderText from "@/components/custom/docs/HeaderText";
import BasicFab from "@/components/example/inputs/fab/Baisc";
import FabColorScheme from "@/components/example/inputs/fab/ColorScheme";
import FabPosition from "@/components/example/inputs/fab/Positions";
import FabSize from "@/components/example/inputs/fab/Size";
import FabVariant from "@/components/example/inputs/fab/Variant";
import DocsLayout from "@/components/layout/DocsLayout";
import { fabRef } from "@/data/reference/fab";
import showLoader from "@/hooks/showLoader";
import { DocText, LargeTextHeader } from "@/styles/docs/docs.styled";
import { Divider } from "@/styles/global";
import React from "react";
import { Box } from "secptrum-ui";

export const FabDocs = () => {
  showLoader();
  return (
    <DocsLayout>
      <Box direction="column" spacing="md">
        <LargeTextHeader>Fab</LargeTextHeader>
        <DocText>
          A dynamic button that stays visible, offering convenient access to a
          primary action.
        </DocText>
      </Box>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <BasicFab />
      <Box direction="column" spacing="md" id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </Box>
      <Box direction="column" spacing="md" id="sizes">
        <HeaderText id="sizes" as="h3">
          Sizes
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>size</ComponentsBadge> prop to change the Fab
          size
        </DocText>
        <FabSize />
      </Box>
      <Box direction="column" spacing="md" id="variants">
        <HeaderText id="variants" as="h3">
          Variants
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>variant</ComponentsBadge> prop to change the
          visual style
        </DocText>
        <FabVariant />
      </Box>
      <Box direction="column" spacing="md" id="color-scheme">
        <HeaderText id="color-scheme" as="h3">
          ColorScheme
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>colorScheme</ComponentsBadge> prop to change
          the colorScheme
        </DocText>
        <FabColorScheme />
      </Box>
      <Box direction="column" spacing="md" id="position">
        <HeaderText id="position" as="h3">
          Position
        </HeaderText>
        <DocText>
          Change the Fab postion using the{" "}
          <ComponentsBadge>position</ComponentsBadge> prop
        </DocText>
        <FabPosition />
      </Box>
      <Box direction="column" spacing="md" id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          This component is based on the <ComponentsBadge>div</ComponentsBadge>{" "}
          element and supports all of its props.
        </DocText>

        <ApiReference reference={fabRef} />
      </Box>
    </DocsLayout>
  );
};
